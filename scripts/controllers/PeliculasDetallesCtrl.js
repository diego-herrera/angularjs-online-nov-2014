
// Controlador para la vista de película en detalle.
angular
    .module("misPelisSeriesApp")
    .controller("PeliculasDetallesCtrl", ["$scope", "Pelicula", "ApiService", function($scope, Pelicula, ApiService) {

        $scope.pelicula = Pelicula.data;

        $scope.rutaImagen = function( ruta ) {

            return ApiService.obtenerRutaImagen( 150, ruta );
        };

    }]);