const http = require('http');

const server = http.createServer( function ( req, res){
let categoria = req.url;

if (categoria == '/tecnologia'){
    res.end("<html><body>Noticias de tecnologia</body></html>");
} else if ( categoria == '/moda') {
    res.end("<html><body>Noticias de moda</body></html>")
} else if ( categoria == '/beleza') {
    res.end("<html><body>Noticias de beleza</body></html>")
} else {
res.end("<html><body>Noticias Atualizadas sempre</body></html>")
}
}).listen(3000)