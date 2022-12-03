SRCDIR="./src/js/"
DSTDIR="./build/"

# Transpile
babel --presets react,es2015 ${SRCDIR} -d ${DSTDIR}

# Packaging
browserify ${DSTDIR}index.js -o bundle.js

date; echo;
