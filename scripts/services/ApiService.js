
// Servicio que establece las utilidades relacionadas con la API de The Movie DataBase.
angular.module("misPelisSeriesApp").service("ApiService", ["$http", function($http) {

    // Realiza peticiones a la API.
    this.consultaApi = function( servicio ) {

        // Con el servicio $http hacemos peticiones de recursos.
        return $http.get("https://api.themoviedb.org/3/" + servicio + "?api_key=826b523c417cbb888744b13031d846c2&language=es")
    };

}]);