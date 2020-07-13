let mysql = require('mysql');

let connMySQL = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '211902fluminense',
        database: 'portal_noticias'
     });

};

module.exports = function (){

 return connMySQL;
 
};
   
