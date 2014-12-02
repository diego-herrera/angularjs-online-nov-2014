
// Controlador para la navegación de primer nivel.
angular.module("misPelisSeriesApp").controller("NavegacionCtrl", ["$scope", "$routeSegment", function($scope, $routeSegment) {

    // Comprueba que la ruta que se está navegando es 'películas/*'.
    $scope.rutaEsPeliculas = function() {

        return $routeSegment.startsWith("peliculas");
    };

    // Comprueba que la ruta que se está navegando es 'series/*'.
    $scope.rutaEsSeries = function() {

        return $routeSegment.startsWith("series");
    };

}]);