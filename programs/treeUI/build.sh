SRCDIR="./src/js/"
DSTDIR="./build/"
CSSDIR="./src/css/"

# Transpile JS
babel --presets react,es2015 ${SRCDIR} -d ${DSTDIR}

# Packaging JS
browserify ${DSTDIR}index.js -o bundle.js

#Packaging CSS
cat ${CSSDIR}* > bundle.css

date; echo;
