
// Controlador para la vista de próximas películas.
angular
    .module("misPelisSeriesApp")
    .controller("PeliculasProximamenteCtrl", ["$scope", "$filter", "Peliculas", function($scope, $filter, Peliculas) {

        // Hemos sacado la llamada a la API del controlador, puesto que no es su responsabilidad
        // hacerla. Ahora, la colección de películas nos llega como una dependencia inyectada desde
        // la propiedad 'resolve' del $routeSegmentProvider, en el documento app.js.

        // Aquí estamos aplicando el filtro 'orderBy' para ordenar la colección
        // de películas por la propiedad 'release_date'.
        $scope.peliculas = $filter("orderBy")(Peliculas.data.results, "release_date");

}]);