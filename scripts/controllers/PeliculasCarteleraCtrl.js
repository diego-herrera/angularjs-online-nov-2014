
// Controlador para la vista de películas en cartelera.
angular
    .module("misPelisSeriesApp")
    .controller("PeliculasCarterleraCtrl", ["$scope", "Peliculas", "$location", function($scope, Peliculas, $location) {

        $scope.peliculas = Peliculas.data.results;

        // Usamos '$location' para navegar a los distintos paths de la aplicación. Para establecer
        // la querystring, pasamos un objeto JSON como parámetro del 'search'. En este caso se navega
        // al detalle de la película correspondiente al identificador recibido.
        $scope.verDetalle = function( id ) {

            $location.path("/peliculas/detalles").search({
                idPelicula: id
            });
        };

    }]);