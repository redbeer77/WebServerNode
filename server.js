const express = require('express')
const app = express()
const hbs = require('hbs');
 

app.use(express.static(__dirname + '/public'))

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/',  (req, res) => {
  
    res.render('index',{
        nombre:'Alberto'
    })

})

app.get('/about',  (req, res) => {
    res.render('about')
})

app.listen(8080,() =>{
    console.log('escuchando petiiones en puerto 8080')
})