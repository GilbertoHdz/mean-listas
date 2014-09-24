var express = require('express'),
    ubigeo = require('./controllers/ubigeo'),
    app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.get('/', ubigeo.index);
app.get('/db/dpto', ubigeo.dpto);
app.get('/db/prov/:cd', ubigeo.prov);
app.get('/db/dist/:cp', ubigeo.dist);

app.listen(7000, function() {
    console.log('Servidor iniciado en el puerto 7000');
});