
// Definimos nuestro módulo (aplicación) y sus dependencias.
angular.module("misPelisSeriesApp", ["ngRoute", "route-segment", "view-segment"]);

// Configuramos el routing de nuestra aplicación.
angular.module("misPelisSeriesApp").config(["$routeSegmentProvider", function($routeSegmentProvider) {

    // Definimos los distintos segmentos.
    $routeSegmentProvider.when("/peliculas", "peliculas"); // Segmento de nivel 0.
    $routeSegmentProvider.when("/peliculas/proximamente", "peliculas.proximamente"); // Segmento de nivel 1.
    $routeSegmentProvider.when("/peliculas/cartelera", "peliculas.cartelera"); // Segmento de nivel 1.
    $routeSegmentProvider.when("/series", "series"); // Segmento de nivel 0.

    // Aquí debemos definir los segmentos que cuelgan de /series.

    // Establecemos qué controlador y qué vista hay que usar en el segmento 'peliculas'.
    $routeSegmentProvider.segment("peliculas", {
        controller: "PeliculasCtrl",
        templateUrl: "views/Peliculas.html"
    });

    // Establecemos qué controlador y qué vista hay que usar en el segmento 'peliculas.proximamente'.
    $routeSegmentProvider.within("peliculas").segment("proximamente", {
        controller: "PeliculasProximamenteCtrl",
        templateUrl: "views/PeliculasProximamente.html",
        resolve: {
            // En el objeto 'resolve' establecemos todas las dependencias del controlador asociado que
            // necesitemos resolver previamente a la instanciación del controlador. Una vez se resuelvan,
            // el controlador se instancia y las dependencias se inyectan en él. Todas las dependecias
            // que indiquemos en 'resolve' deben retornar una promesa.
            Peliculas: ["ApiService", function(ApiService) {

                return ApiService.consultaApi("movie/upcoming");
            }]
        }
    });

    // Establecemos qué controlador y qué vista hay que usar en el segmento 'peliculas.cartelera'.
    $routeSegmentProvider.within("peliculas").segment("cartelera", {
        controller: "PeliculasCarterleraCtrl",
        templateUrl: "views/PeliculasCarterlera.html",
        resolve: {
            // En el objeto 'resolve' establecemos todas las dependencias del controlador asociado que
            // necesitemos resolver previamente a la instanciación del controlador. Una vez se resuelvan,
            // el controlador se instancia y las dependencias se inyectan en él. Todas las dependecias
            // que indiquemos en 'resolve' deben retornar una promesa.
            Peliculas: ["ApiService", function(ApiService) {

                return ApiService.consultaApi("movie/now_playing");
            }]
        }
    });

    // Establecemos qué controlador y qué vista hay que usar en el segmento 'series'.
    $routeSegmentProvider.segment("series", {
        controller: "SeriesCtrl",
        templateUrl: "views/Series.html"
    });

    // Aquí debemos establecer los controladores y vistas para los segmentos que cuelgan de /series.

}]);