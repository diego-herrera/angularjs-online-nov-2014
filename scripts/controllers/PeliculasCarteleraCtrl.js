
// Controlador para la vista de películas en cartelera.
angular.module("misPelisSeriesApp").controller("PeliculasCarterleraCtrl", ["$scope", "ApiService", function($scope, ApiService) {

    // Usamos el servicio 'ApiService' para obtener la colección de películas.
    ApiService
        .consultaApi( "movie/now_playing" )
        .then(
            // Si la petición a la API fue correcta, establecemos el resultado
            // en el $scope para que la vista tenga acceso.
            function( resultado ) {

                $scope.peliculas = resultado.data.results;
            },
            // Si algo salió mal, mostramos mensaje.
            function() {

                alert("Algo no ha ido bien.")
            }
        );

}]);