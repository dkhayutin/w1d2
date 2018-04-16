var https = require('https');
console.log('Did it!');

function getAndPrintHTMLChuncks () {

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

https.get(requestOptions, function(response) {

  response.setEncoding('utf8');

 response.on('data', function (data) {
  console.log('chuck received. Length:', data);
 })

 response.on('end', function() {
  console.log('Respone Stream Complete');
  });
});
}
getAndPrintHTMLChuncks();

