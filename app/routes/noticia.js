module.exports = function(app){
   
    app.get('/noticia', (req, res) => {

        let connection = app.server.Connection();
        let noticiasModel = app.app.models.noticiasModel;

    noticiasModel.getNoticia(connection, function(error, result){
        res.render("noticias/noticia", {noticia : result})
    });
    

});

};

