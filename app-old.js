const http = require('http');

http.createServer((req,res)=>{

    //configurando la respuesta como json
    res.writeHead(200,{'Content-Type':'application/json'});

   // res.write('hola mundo');
   let salida = {
       nombre:'Alberto',
       edad: 33,
       url: req.url
   }
   res.write(JSON.stringify(salida))
   res.end();
})
.listen(8080)

console.log('escuchando puerto 8080')
