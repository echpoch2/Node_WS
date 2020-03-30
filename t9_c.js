const rpcWSC = WebSocket = require('rpc-websockets').Client;
let ws = new rpcWSC('ws://localhost:5000');
let k=0;
ws.on('open', ()=>{
    setInterval(()=>ws.notify('n1',{n: ++k}),10000);
})