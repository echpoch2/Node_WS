const rpcWSS = require('rpc-websockets').Server;
let server = new rpcWSS({
    port:5000, host: 'localhost'
});
server.register('n1', (params)=>{console.log('n1-', params)}).public();
server.register('n2', (params)=>{console.log('n2-', params)}).public();
