$(document).ready(()=>{
    a = new WebSocket("ws://"+location.hostname+':8001/hello/');
    a.onconnect = (e)=>{
        console.log("connected");
    };
    a.onmessage = (e)=>{
        console.log('messaged')
    }
})