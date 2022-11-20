// Based on https://github.com/Princesseuh/astro-eleventy-img/blob/main/src/placeholder.ts

import sharp from "sharp";
import DataURIParser from "datauri/parser";
import { createHash } from "crypto";
import { mkdir, readFileSync, writeFile } from "fs";
import path from "path";

const cache: { [imgSrc: string]: PlaceholderResult } = {};

export interface PlaceholderOptions {
    quality?: number;
    outputDir?: string;
}

export interface PlaceholderResult {
    dataURI: string | undefined;
    width: number | undefined;
    height: number | undefined;
    quality: number | undefined;
}

const defaultOptions: PlaceholderOptions = {
    quality: 60,
    outputDir: "src/assets/placeholders",
};

export async function generatePlaceholder(
    src: Promise<any>,
    imgRaw: Promise<any>,
    options: PlaceholderOptions = defaultOptions
): Promise<PlaceholderResult | null> {
    options = Object.assign({}, defaultOptions, options);

    // Ensure the outputDir has an ending slash, otherwise files would get generated in the wrong folder
    options.outputDir = options.outputDir!.endsWith("/")
        ? options.outputDir
        : options.outputDir + "/";

    // Generate hash
    const hash = getHash({ path: (await src).default.src, options });

    // Check if we've generated this file before on disk
    try {
        const existingFile = readFileSync(
            options.outputDir + hash + ".placeholder",
            {
                encoding: "utf-8",
            }
        );

        return JSON.parse(existingFile);
    } catch (err: any) {
        // Otherwise, the file doesn't exist, so let's generate it
        if (err.code === "ENOENT") {
            return await getDataURI(src, imgRaw, hash, options);
        }
    }
    throw null;
}

function getHash(options: {
    path: string;
    options: PlaceholderOptions;
}): string {
    const hash = createHash("sha256");

    hash.update(JSON.stringify(options));

    return hash.digest("base64url").substring(0, 5);
}

// Adapted from https://github.com/google/eleventy-high-performance-blog/blob/624aaa9ede9df609e2d4656f23d819621f5cb464/_11ty/blurry-placeholder.js
async function getDataURI(
    src: Promise<any>,
    imgRaw: Promise<Buffer>,
    hash: string,
    options: PlaceholderOptions
): Promise<PlaceholderResult | null> {
    const imgSrc = (await src).default.src as string;
    // If we have it cached, just return that
    // We also check if the quality requested is the same so people can update quality easily without needing to reload
    if (cache[imgSrc] && cache[imgSrc].quality === options.quality) {
        return cache[imgSrc];
    }

    // Otherwise, let's generate it
    // Get image size through Sharp
    const image = sharp(await imgRaw);
    const imageMetadata = await image.metadata();

    // Find perfect size for placeholder
    const placeholderDimension = getBitmapDimensions(
        imageMetadata.width,
        imageMetadata.height,
        options.quality
    );

    // Create image
    const buffer = await image
        .rotate() // Manifest rotation from metadata
        .resize(placeholderDimension.width, placeholderDimension.height)
        .png()
        .toBuffer();

    const parser = new DataURIParser();
    const data = {
        dataURI: parser.format(".png", buffer).content,
        width: imageMetadata.width,
        height: imageMetadata.height,
        quality: options.quality,
    };

    // Cache things both in memory and in the filesystem
    cache[imgSrc] = data;

    // Let's try to make the dir first, in case it doesn't exist
    mkdir(options.outputDir, { recursive: true }, (err) => {
        if (err) {
            console.error(err);
        }

        writeFile(
            options.outputDir + hash + ".placeholder",
            JSON.stringify(data),
            (err) => {
                if (err) {
                    console.error(err);
                }
            }
        );
    });

    return data;
}

function getBitmapDimensions(
    imgWidth: number,
    imgHeight: number,
    pixelTarget: number
): { width: number; height: number } {
    // Aims for a bitmap of ~P pixels (w * h = ~P).
    // Gets the ratio of the width to the height. (r = w0 / h0 = w / h)
    const ratioWH = imgWidth / imgHeight;
    // Express the width in terms of height by multiply the ratio by the
    // height. (h * r = (w / h) * h)
    // Plug this representation of the width into the original equation.
    // (h * r * h = ~P).
    // Divide the bitmap size by the ratio to get the all expressions using
    // height on one side. (h * h = ~P / r)
    let bitmapHeight = pixelTarget / ratioWH;
    // Take the square root of the height instances to find the singular value
    // for the height. (h = sqrt(~P / r))
    bitmapHeight = Math.sqrt(bitmapHeight);
    // Divide the goal total pixel amount by the height to get the width.
    // (w = ~P / h).
    const bitmapWidth = pixelTarget / bitmapHeight;
    return { width: Math.round(bitmapWidth), height: Math.round(bitmapHeight) };
}
