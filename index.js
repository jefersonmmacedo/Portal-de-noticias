const app = require("./server/app");
const rotaHome = require('./app/routes/home')
rotaHome(app)
const rotaForms = require('./app/routes/form')
rotaForms(app)
const rotaNoticias = require('./app/routes/noticias')
rotaNoticias(app)

app.listen(3000, function(){
    console.log('Servidor Ativo');
})