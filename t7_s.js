const rpcWSS = require('rpc-websockets').Server;
let server = new rpcWSS({
    port: 5000,
    host: 'localhost'
});
server.setAuth((l)=>{
    return (l.login == 'smw' && l.password =='777')
});
server.register('sum', (params)=>{return params[0]+params[1]}).public();
server.register('mul', (params)=>{
    let res = 1;
    params.forEach(element => {
        res *=element;
    });
    return res}).public(); 
server.register('con', (params)=>{return params[0]+params[1]+params[2]}).protected();