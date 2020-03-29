const rpcWSS = require('rpc-websockets').Server;
let k=0;
let server = new rpcWSS({
    port: 5000,
    host: 'localhost'
});
server.event('AAA');
server.event('BBB');
server.event('CCC');
process.stdin.setEncoding("ascii");
process.stdin.on("data", (data)=>{
    if(data[0]=="A")
    {
        server.emit('AAA')
        console.log('A')
    }
    
    if(data[0]=="B")
    {
        server.emit('BBB')
    }
    
    if(data[0]=="C")
    {
        server.emit('CCC')
    }
    
    
  });
  