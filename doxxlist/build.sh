#!/bin/bash
[ ! -d build ] && mkdir build
rm -rf build/* 2>/dev/null
cp src/index.html build
echo ">>> Generating json"
bun gen_jsons.ts
echo ">>> Concatenating JS/CSS"
touch build/main.js
for f in src/*.js; do 
    { echo "// start $f"; cat "${f}"; echo -e "\n// end $f"; } >> build/main.js
done
touch build/main.css
for f in src/*.css; do 
    { echo "/* start $f */"; cat "${f}"; echo -e "\n/* end $f */"; } >> build/main.css
done