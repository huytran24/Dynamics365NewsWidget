var http = require('http');
var request = require('request-promise');
var parseString = require('xml2js').parseString;
const feedUrls = ["https://www.inogic.com/blog/feed/", "http://crmaudio.libsyn.com/CRM", "https://www.engineeredcode.com/feed"];

http.createServer(function (req, httpResponse) {
    httpResponse.writeHead(200, { 'Content-Type': 'text/json' });

    const promises = urls.map(url => request(url));
    Promise.all(promises).then((data) => {
        // data = [promise1,promise2]
        var body1 = data[0]; 
        parseString(body1, function (err, result) {
    
    
            httpResponse.end(JSON.stringify(result));
        });
    });

}).listen(8080);