var https = require('https');

function getAndPrintHTML (options) {

https.get(options, function(response) {

  response.setEncoding('utf8');
  response.on('data', function (data) {

  console.log('chuck received. Length:', data)
  var newData = []
  newData += data;
  console.log(newData)
 })


response.on('end', function() {
console.log('Respone Stream Complete');

  });
});
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

getAndPrintHTML(requestOptions)