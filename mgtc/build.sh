#!/bin/bash
rm main.js && touch main.js
touch srcjs/num_tasks.js 
echo "function num_tasks() { return $(ls srcjs/task*.js | wc -l); }" > srcjs/num_tasks.js
touch main.js
for f in srcjs/*.js; do 
    { echo "// start $f"; cat "${f}"; echo -e "\n// end $f"; } >> main.js
done
