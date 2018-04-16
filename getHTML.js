var https = require('https');

function getHTML (options, callback) {

https.get(options, function(response) {

  response.setEncoding('utf8');
  response.on('data', function (html) {

  console.log('chuck received. Length:')
  callback(html)

  var newData = []
  newData += html;
  console.log(newData)
 })


response.on('end', function() {
console.log('Respone Stream Complete');

  });
});
}

function printHTML(html) {
console.log(html)

}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

getHTML(requestOptions,printHTML )
