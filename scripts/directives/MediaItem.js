
// Directiva que representa la fila de una tabla. Muestra los datos correspondientes
// a una película o una serie que se indican como entrada.
angular
    .module("misPelisSeriesApp")
    .directive("mediaItem", ["ApiService", function(ApiService) {

        return {

            // Con restrict AE indicamos que la directiva puede usarse tanto como
            // atributo de un elemento nativo de HTML, como elemento independiente.
            restrict: "AE",

            // Con replace 'true' indicamos que el template de la directiva tiene
            // que reemplazar el elemento donde ésta se indica.
            replace: true,

            // Con templateUrl se establece la ruta al documento HTML que contiene
            // la vista asociada de la directiva.
            templateUrl: "views/MediaItem.html",

            // En scope establecemos la 'interfaz' de conexión de la directiva. En este
            // caso, se facilita 'datos' para enlazar el objeto JSON que contiene los
            // datos de la película o la serie. Por su lado, 'alSeleccionar' nos notificará
            // hacia afuera el clic que se realiza sobre el elemento, para poder actuar
            // en consecuencia.
            scope: {
                datos: "=", // Con = se establece 2-way-databinding.
                alSeleccionar: "&" // Con & se estable un callback donde notificar acciones.
            },

            // En la función link se establece el comportamiento del scope. También, aquello
            // que esté relacionado con la manipulación del DOM.
            link: function(scope) {

                scope.rutaImagen = function( ruta ) {

                    return ApiService.obtenerRutaImagen( 45, ruta );
                };

                scope.clickEnMedia = function( id ) {

                    // Al ejecutar 'alSeleccionar' se notifica la acción de clic sobre el
                    // elemento. El identificador del mismo se pasa como valor de un atributo
                    // de un objeto JSON: el nombre de este atributo se debe respetar al
                    // hacer uso de 'alSeleccionar' desde la vista que contiene la directiva.
                    scope.alSeleccionar({ mediaId: id });
                };
            }
        };

    }]);