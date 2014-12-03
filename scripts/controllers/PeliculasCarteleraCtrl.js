
// Controlador para la vista de películas en cartelera.
angular
    .module("misPelisSeriesApp")
    .controller("PeliculasCarterleraCtrl", ["$scope", "Peliculas", function($scope, Peliculas) {

        // Hemos sacado la llamada a la API del controlador, puesto que no es su responsabilidad
        // hacerla. Ahora, la colección de películas nos llega como una dependencia inyectada desde
        // la propiedad 'resolve' del $routeSegmentProvider, en el documento app.js.

        $scope.peliculas = Peliculas.data.results;

}]);