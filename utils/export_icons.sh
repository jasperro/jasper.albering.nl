for file in src/assets/images/svg/icon*.svg
do
     inkscape --export-text-to-path --export-plain-svg --export-filename="${file}-fontless.svg" "${file}";
done
