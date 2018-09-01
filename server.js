const express = require('express')
const app = express()
 
app.get('/',  (req, res) => {
  
    let salida = {
        nombre:'Alberto',
        edad: 33,
        url: req.url
    }
    res.send(salida)

})
// app.get('/data',  (req, res) => {
  

//     res.send('Hola data')

// })
 
app.listen(8080,() =>{
    console.log('escuchando petiiones en puerto 8080')
})