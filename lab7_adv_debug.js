var http = require('http')
function processRecord(request, response){
    var body = 'Node.JS Tutorial\n'
    var contentLength = body.length 
    //var contentLength = body
    response.writeHead(200,{ 
        'Content-Length':contentLength,
        'Content-Type':'text/plain'
    })
    response.end(body)
}
var server = http.createServer(processRecord)
console.log("server created, start listen to port 8765")
server.listen(8765)