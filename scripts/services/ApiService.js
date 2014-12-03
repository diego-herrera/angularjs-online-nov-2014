
// Servicio que establece las utilidades relacionadas con la API de The Movie DataBase.
angular.module("misPelisSeriesApp").service("ApiService", ["$http", "configuracion", function($http, configuracion) {

    // Realiza peticiones a la API.
    this.consultaApi = function( servicio ) {

        // Con el servicio $http hacemos peticiones de recursos.
        // Nos ayudamos del value 'configuracion' para montar la URL a la API.
        var url =
            "https://api.themoviedb.org/" +
            configuracion.apiVersion +
            "/" +
            servicio +
            "?api_key=" +
            configuracion.apiKey +
            "&language=es";

        return $http.get(url);
    };

}]);