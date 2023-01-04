SRCDIR="./src/js/"
DSTDIR="./build/"
CSSDIR="./src/css/"

# Transpile JS
echo "Transpile with babel"
babel --presets react,es2015 ${SRCDIR} -d ${DSTDIR}

# Packaging JS
echo "Packaging with browserify"
browserify -g browserify-css ${DSTDIR}index.js -o downloads/bundle.js

#Packaging CSS
echo "Packaging CSS"
cat ${CSSDIR}* > downloads/bundle.css

date; echo;
