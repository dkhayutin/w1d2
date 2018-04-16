var getHTML = require('./http-function.js')

function printLowerCase (html) {

console.log(html.toLowerCase())


}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6.html'
  };


getHTML(requestOptions, printLowerCase)