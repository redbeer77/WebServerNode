const express = require('express')
const app = express()
const hbs = require('hbs');
 

app.use(express.static(__dirname + '/public'))

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/',  (req, res) => {
  
    // let salida = {
    //     nombre:'Alberto',
    //     edad: 33,
    //     url: req.url
    // }


    res.render('index',{
        nombre:'Alberto'
    })
    //res.send(salida)

})
// app.get('/data',  (req, res) => {
  

//     res.send('Hola data')

// })
 
app.listen(8080,() =>{
    console.log('escuchando petiiones en puerto 8080')
})