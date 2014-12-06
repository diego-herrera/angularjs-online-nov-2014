
// Definimos nuestro módulo (aplicación) y sus dependencias.
angular.module("misPelisSeriesApp", ["ngRoute", "route-segment", "view-segment"]);

// Configuramos el routing de nuestra aplicación.
angular.module("misPelisSeriesApp").config(["$routeSegmentProvider", "$routeProvider", function($routeSegmentProvider, $routeProvider) {

    // Definimos los distintos segmentos.
    $routeSegmentProvider.when("/peliculas", "peliculas"); // Segmento de nivel 0.
    $routeSegmentProvider.when("/peliculas/proximamente", "peliculas.proximamente"); // Segmento de nivel 1.
    $routeSegmentProvider.when("/peliculas/cartelera", "peliculas.cartelera"); // Segmento de nivel 1.
    $routeSegmentProvider.when("/peliculas/detalles", "peliculas.detalles");
    $routeSegmentProvider.when("/series", "series"); // Segmento de nivel 0.

    // Con 'otherwise' / 'redirectTo' indicamos la ruta a navegar
    // por defecto en caso de intentar acceder a una no definida.
    $routeProvider.otherwise({
        redirectTo: "/peliculas/proximamente"
    });

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

    // Establecemos qué controlador y qué vista hay que usar en el segmento 'peliculas.detalles'.
    $routeSegmentProvider.within("peliculas").segment("detalles", {
        controller: "PeliculasDetallesCtrl",
        templateUrl: "views/PeliculasDetalles.html",
        resolve: {
            // En $routeParams tenemos la colección de parámetros que representan
            // la querystring de la ruta que se navega. En este caso, interesa
            // usar el parámetro 'idPelicula' para acceder a la API con él y
            // recuperar los datos de una película individual.
            Pelicula: ["ApiService", "$routeParams", function(ApiService, $routeParams) {

                return ApiService.consultaApi("movie/" + $routeParams.idPelicula);
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
