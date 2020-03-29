const httpserver = require("http").createServer((req,res)=>{
    if(req.method == 'GET' && req.url =='/start')
    {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        res.end(require('fs').readFileSync('./09-01.html'))
    }
})
httpserver.listen(3000);
console.log('OK');
let k =0;
const WebSocket = require('ws');
const wsserver = new WebSocket.Server({
    port: 4000,
    host: 'localhost',
    path: '/wsserver'
})
wsserver.on('connection', (ws)=>{
    ws.on('message', message=>{
       console.log('Received message =>'+message )
    })
    wsserver.
    setInterval(()=>{ws.send('server:'+(k++))}, 2000);
})