const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');
 
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'))

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/',  (req, res) => {
  
    res.render('index',{
        nombre:'alberto castro'
    })

})

app.get('/about',  (req, res) => {
    res.render('about')
})

app.listen(port,() =>{
    console.log(`escuchando petiiones en puerto ${ port }`)
})