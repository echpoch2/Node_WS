const httpserver = require("http").createServer((req,res)=>{
    
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
       console.log(JSON.parse(message));
      let obj =  JSON.parse(message);
      obj.z=obj.x+obj.y;
       ws.send(JSON.stringify(obj));
    })

})