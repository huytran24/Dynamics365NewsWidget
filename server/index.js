var http = require('http');
var request = require('request');
var parseString = require('xml2js').parseString;

http.createServer(function (req, httpResponse) {
    httpResponse.writeHead(200, { 'Content-Type': 'text/json' });

    request('https://feedforall.com/sample.xml', { json: true }, (err, res, body) => {

        if (err) { return console.log(err); }
        parseString(body, function (err, result) {


            httpResponse.end(JSON.stringify(result));
        });
    });
}).listen(8080);