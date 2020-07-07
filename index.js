const app = require("./server/app");



app.get('/', (req, res) => {
    res.render("home/index")
});

app.get('/formulario_inclusao_noticia', (req, res) => {
    res.render("admin/form_add_noticia")
});

app.get('/noticias', (req, res) => {
    res.render("noticias/noticias")
});

app.get('/noticia', (req, res) => {
    res.render("noticias/noticia")
});

app.listen(3000, function(){
    console.log('Servidor Ativo');
})