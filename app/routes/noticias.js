module.exports = function(app){
   
    app.get('/noticias', (req, res) => {

        let connection = app.server.Connection();

        let noticiasModel = app.app.models.noticiasModel;
        
        noticiasModel.getNoticias(connection, function(error, result){
            res.render("noticias/noticias", {noticias : result} );
       
        });

});

};

