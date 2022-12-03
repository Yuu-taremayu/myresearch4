# Transpile
babel --presets react,es2015 src -d build

# Packaging
browserify build/index.js -o bundle.js

date; echo;
