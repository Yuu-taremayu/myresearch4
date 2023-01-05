SRCDIR="./src/js/"
DSTDIR="./build/"
CSSDIR="./src/css/"

# Transpile JS
echo "Transpile with babel"
babel --presets react,es2015 ${SRCDIR} -d ${DSTDIR}

# Packaging JS
echo "Packaging with browserify"
<<<<<<< HEAD
browserify -g browserify-css ${DSTDIR}index.js -o downloads/bundle.js

#Packaging CSS
echo "Packaging CSS"
cat ${CSSDIR}* > downloads/bundle.css
=======
browserify -g browserify-css ${DSTDIR}index.js -o bundle.js

#Packaging CSS
echo "Packaging CSS"
cat ${CSSDIR}* > bundle.css
>>>>>>> 7dd55729ef677eaf25a3d6bf69f490dc3e719185

date; echo;
