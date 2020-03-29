const rpcWSC = WebSocket = require('rpc-websockets').Client;
let ws = new rpcWSC('ws://localhost:5000');
ws.on('open', ()=>{
    ws.subscribe('CCC');
    ws.on('CCC', (p)=>{console.log("Событие C")})
})