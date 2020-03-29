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
        
        if(message[0]=="I")
        {
            let count_k=0;
            wsserver.clients.forEach((client)=>{
                count_k++;
                if(wsserver.clients.size==count_k)
                    client.id = message;                
             })
            console.log(message)
        }
        else
        wsserver.clients.forEach((client)=>{
            client.send("M"+message);               
         })
       console.log('Received message =>'+message )
    })
    let data;
    setInterval(()=>{
        data='';
        wsserver.clients.forEach((client)=>{
        data+=client.id+"<br>";               
     }
     )
     ws.send(data);
    },1000)
    
    
})