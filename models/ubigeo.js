var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost/ubigeo', function(err, db) {

    if (err) throw err;

    exports.cargarDpto = function(cb) {

        var Dpto = db.collection('dpto');

        Dpto.find().toArray(function(err, results) {
            cb(results);
        });
    };

    exports.cargarProv = function(cd, cb) {

        var Prov = db.collection('prov');

        Prov.find({coddep: cd}).toArray(function(err, results) {
            cb(results);
        });
    };

    exports.cargarDist = function(cp, cb) {

        var Dist = db.collection('dist');

        Dist.find({codpro: cp}).toArray(function(err, results) {
            cb(results);
        });
    };

});