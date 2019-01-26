var http = require('http');
var request = require('request-promise');
var parseString = require('xml2js').parseString;
const feedUrls = ["https://www.inogic.com/blog/feed/", "http://crmaudio.libsyn.com/CRM", "https://www.engineeredcode.com/feed"];

http.createServer(function (req, httpResponse) {
    httpResponse.writeHead(200, { 'Content-Type': 'text/json' });

    const promises = feedUrls.map(url => request(url));
    Promise.all(promises).then((data) => {
        // data = [promise1, promise1, etc]
        var resultXml = '';
        for (var i = 0; i < data.length; i++) {
            resultXml = resultXml + data[i]; // this is the xml response
        }

        parseString(resultXml, function (err, result) {
            httpResponse.end(JSON.stringify(result));
        });

    });

}).listen(8080);