const rpcWSC = WebSocket = require('rpc-websockets').Client;
let ws = new rpcWSC('ws://localhost:5000');
ws.on('open', ()=>{
    ws.call('sum', [1,4]).then((r)=>console.log('sum =' +r))
    ws.call('mul', [1,4,5]).then((r)=>console.log('mul =' +r))
    ws.login({
        login: 'smw',
        password: '777'
    }).then((login)=>{
        if(login)
        {
            ws.call('con', ["n","o","d"]).then((r)=>{
                console.log('con ='+ r);
            })
        }
    })
})