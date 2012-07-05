#!/bin/bash

DIR=$( cd "$( dirname "$0" )" && pwd )

DEFAULT_FILE="${DIR}/module.template.js"
SRC_FILE="${1:-$DEFAULT_FILE}"
# module.template.js -> module
SRC_NAME="${SRC_FILE%%.*}"

# generate template function (without wrapper)
handlebars -s "$SRC_FILE" > "${SRC_NAME}.hbs"

# prefix with module.exports, so it works with node require()
echo 'module.exports = ' | cat - "${SRC_NAME}.hbs" > "${SRC_NAME}.js" && rm "${SRC_NAME}.hbs"

# beautify output in-place to enhance readability
uglifyjs -b -nm -ns --overwrite "${SRC_NAME}.js"