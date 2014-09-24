var ug = require('../models/ubigeo');

module.exports = exports = {

    index: function(req, res) {
        /*res.render('index', {
            titulo: "Listas Desplegables en MEAN con rutas"
        });*/
        res.sendFile('index.html', {root: './'});
    },

    dpto: function(req, res) {
        ug.cargarDpto(function(data) {
            res.json(data);
        });
    },

    prov: function(req, res) {
        var cd = req.params.cd;

        ug.cargarProv(cd, function(data) {
            res.json(data);
        });
    },

    dist: function(req, res) {
        var cp = req. params.cp;

        ug.cargarDist(cp, function(data) {
            res.json(data);
        });
    }
};