
// Directiva que muestra de manera gráfica la votación
// media que tiene una película o una serie.
angular
    .module("misPelisSeriesApp")
    .directive("votacion", ["$compile", function($compile) {

        return {

            // Con restrict AE indicamos que la directiva puede usarse tanto como
            // atributo de un elemento nativo de HTML, como elemento independiente.
            restrict: "AE",

            // En scope establecemos la 'interfaz' de conexión de la directiva. En este
            // caso, se facilita 'media' para que nos indiquen desde la vista la votación
            // media de la película o serie. Es un valor de entrada que no se va a ver
            // alterado, por eso usamos @.
            scope: {
                media: "@"
            },

            // En la función link se establece el comportamiento del scope. También, aquello
            // que esté relacionado con la manipulación del DOM, como es nuestro caso. Vamos
            // a crear la vista de la directiva a mano, y luego la vamos a compilar con el
            // scope para que adquiera la funcionalidad que esté definida en él. Por último,
            // sustituimos el elemento del DOM actual por nuestra nueva vista compilada.
            link: function(scope, elemento) {

                // Los atributos que nos vienen dados en el scope a través de @ son de tipo
                // string, por lo que siempre tendremos que hacer la conversión correspondiente.
                var mediaComoNumero = parseFloat( scope.media );

                // Redondeamos la parte entera de la votación media.
                var mediaRedondeada = Math.round(mediaComoNumero);

                // La vista de nuestra directiva está contenida dentro de un <div>.
                var vista = "<div>";

                // Añadimos a la vista tantos <span> de estrellas como votación
                // media tenga la película o serie.
                for ( var f = 0; f < mediaRedondeada; f++ ) {
                    vista += "<span class=\"glyphicon glyphicon-star\"></span>";
                }

                // Añadimos a la vista tantos <span> de estrellas vacías como
                // valores que resten desde la nota media hasta 10.
                for ( var f = 0, F = 10 - mediaRedondeada; f < F; f++ ) {

                    vista += "<span class=\"glyphicon glyphicon-star-empty\"></span>";
                }

                // Cerramos el <div> de la vista.
                vista += "</div>";

                // Creamos un nuevo elemento DOM a partir del string que hemos
                // montado con nuestra vista.
                var nuevoElemento = angular.element( vista );

                // Compilamos el nuevo elemento DOM con el scope de la directiva.
                var nuevoElementoCompilado = $compile( nuevoElemento )( scope );

                // Sustituimos el elemento actual (el que se usa en la vista que
                // instancia la directiva) por el que acabamos de compilar.
                elemento.replaceWith( nuevoElementoCompilado );
            }
        };
    }]);