const hbs = require('hbs');
// helpers

//Un helper no es más que una función que se puede llamar desde las vistas hbs.

hbs.registerHelper('getAnio',() =>{
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar',(texto) =>{
    let palabras = texto.split(' ')
    palabras.forEach((palabra ,index)=> {
        palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    });
    return palabras.join(' ')  ;
});

//No hace falta exportarlo, en el archivo server.js ponemos el require(rutaHelpers) para que lo coja.