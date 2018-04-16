var getHTML = require('./http-function.js')

function printReverse (html) {

console.log(html.printReverse())


}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6.html'
  };


getHTML(requestOptions, printReverse)