
// Controlador para la navegación de segundo nivel: Películas.
angular.module("misPelisSeriesApp").controller("PeliculasCtrl", ["$scope", "$routeSegment", function($scope, $routeSegment) {

    // Comprueba que la ruta que se está navegando es 'películas/proximamente/*'.
    $scope.rutaEsProximamente = function() {

        return $routeSegment.startsWith("peliculas.proximamente");
    };

    // Comprueba que la ruta que se está navegando es 'películas/cartelera/*'.
    $scope.rutaEsCartelera = function() {

        return $routeSegment.startsWith("peliculas.cartelera");
    };

}]);