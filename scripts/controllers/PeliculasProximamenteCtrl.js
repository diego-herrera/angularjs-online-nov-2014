
// Controlador para la vista de próximas películas.
angular.module("misPelisSeriesApp").controller("PeliculasProximamenteCtrl", ["$scope", "ApiService", function($scope, ApiService) {

    // Usamos el servicio 'ApiService' para obtener la colección de películas.
    ApiService
        .consultaApi( "movie/upcoming" )
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