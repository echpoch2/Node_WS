const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:4000/wsserver')
ws.on('open', ()=>{
   let intId = setInterval(()=>{
        ws.send(JSON.stringify({
            x: 1,
            y: 2
        }));
    },500)
    ws.on('message', message=>{
        console.log(JSON.parse(message));
    })
    setTimeout(()=>{
        clearInterval(intId)
    }, 10000);
    setTimeout(()=>{
        ws.close();
    }, 20000);
    
})
