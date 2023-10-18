const http=require('http');
const hostname= 'johnny';


server.listen(port, hostname,()=>{
    console.log('Servidor web activo');
});
http.createServer((req,res)=>{
    res.write("index.html");
    res.end();
})
.listen(8082);
console.log("Escuchando el puerto",8082)