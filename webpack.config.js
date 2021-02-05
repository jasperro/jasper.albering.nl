const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

const isDev = process.env.NODE_ENV !== "production";

module.exports = {
    mode: isDev ? "development" : "production",
    stats: {
        colors: true,
        preset: "normal",
    },
    performance: { hints: isDev ? false : "warning" },
    devtool: isDev ? "cheap-module-source-map" : "source-map",
    entry: [path.resolve(__dirname, "src/assets/styles/index.js")],
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist/assets"),
        publicPath: "/assets/",
    },
    plugins: [
        new WebpackManifestPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
    ],
    optimization: {
        removeEmptyChunks: true,
        ...(!isDev && {
            minimizer: [new TerserPlugin()],
        }),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.p?css/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                config: true,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset",
                generator: {
                    filename: `images/${
                        isDev ? "[name][ext]" : "[contenthash][ext]"
                    }`,
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    filename: `fonts/${
                        isDev ? "[name][ext]" : "[contenthash][ext]"
                    }`,
                },
            },
        ],
    },
    resolve: {
        alias: {
            // Helpful alias for importing assets
            assets: path.resolve(__dirname, "src/assets"),
        },
    },
};
