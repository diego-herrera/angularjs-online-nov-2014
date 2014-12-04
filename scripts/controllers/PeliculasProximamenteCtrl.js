
// Controlador para la vista de próximas películas.
angular
    .module("misPelisSeriesApp")
    .controller("PeliculasProximamenteCtrl", ["$scope", "$filter", "Peliculas", "$location", function($scope, $filter, Peliculas, $location) {

        $scope.peliculas = $filter("orderBy")(Peliculas.data.results, "release_date");

        // Usamos '$location' para navegar a los distintos paths de la aplicación. Para establecer
        // la querystring, pasamos un objeto JSON como parámetro del 'search'. En este caso se navega
        // al detalle de la película correspondiente al identificador recibido.
        $scope.verDetalle = function( id ) {

            $location.path("/peliculas/detalles").search({
                idPelicula: id
            });
        };

    }]);