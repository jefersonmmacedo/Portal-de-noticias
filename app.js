const express = require('express');
const { ENGINE_METHOD_ALL } = require('constants');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send("<html><body>Noticias Atualizadas Sempre</body></html>")
});

app.get('/tecnologia', (req, res) => {
    res.render("secao/tecnologia")
});

app.get('/esporte', (req, res) => {
    res.render("<html><body>Noticias Esportese</body></html>")
});

app.get('/saude', (req, res) => {
    res.render("<html><body>Noticias Saúde</body></html>")
});

app.listen(3000, function(){
    console.log('Servidor Ativo');
})