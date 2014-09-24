var app = angular.module('app', []);

app.controller('UbigeoCtrl', function($scope, $http) {
    //$scope.mensaje = "Mundo desde un Controlador";
    /*$http.get('/data/dpto.json')
        .success(function(data) {
            $scope.dptos = data;
            $scope.dpto = data[0].coddep;
            $scope.cargarProv();
        });*/

    $http.get('/db/dpto')
        .success(function(data) {
            $scope.dptos = data;
            $scope.dpto = data[0].coddep;

            $scope.cargarProv();
        });

    $scope.cargarProv = function() {
        // $http.get('/data/prov.json')
        $http.get('/db/prov/' + $scope.dpto)
            .success(function(data) {
                /*data = data.filter(function(item) {
                    return (item.coddep == $scope.dpto);
                });*/
                $scope.provs = data;
                $scope.prov = data[0].codpro;

                $scope.cargarDist();
            });
    };

    $scope.cargarDist = function() {
        // $http.get('/data/dist.json')
        $http.get('/db/dist/' + $scope.prov)
            .success(function(data) {
                /*data = data.filter(function(item) {
                    return (item.codpro == $scope.prov);
                });*/
                $scope.dists = data;
                $scope.dist = data[0].coddis;

            });
    };
});