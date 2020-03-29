const rpcWSC = WebSocket = require('rpc-websockets').Client;
let ws = new rpcWSC('ws://localhost:5000');
ws.on('open', ()=>{
    ws.subscribe('AAA');
    ws.subscribe('BBB');
    ws.on('AAA', (p)=>{console.log("Событие А")})
    ws.on('BBB', (p)=>{console.log("Событие B")})
})