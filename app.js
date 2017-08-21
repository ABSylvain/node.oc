var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, { "Content-Type": "text/plain" });

    if (page == '/index') {
        res.write(params['speudo']);
    } else if (page == '/') {
        res.write('En bricolage');
    }
    res.end();
});
server.on('abort', function() {
    console.log('connection')
});
server.on('close', function() {
    console.log('close');
});

server.listen(8080);

setTimeout(function() {
    server.close();
}, 3000);