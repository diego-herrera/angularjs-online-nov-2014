
// Directiva que muestra de manera gráfica los géneros
// que tiene una película o serie.
angular
    .module("misPelisSeriesApp")
    .directive("generos", ["$compile", function($compile) {

        return {

            // Con restrict AE indicamos que la directiva puede usarse tanto como
            // atributo de un elemento nativo de HTML, como elemento independiente.
            restrict: "AE",

            // En scope establecemos la 'interfaz' de conexión de la directiva. En este
            // caso, se facilita 'datos' para enlazar el array de géneros que tiene
            // la película o serie.
            scope: {
                coleccion: "="
            },

            // En la función link se establece el comportamiento del scope. También, aquello
            // que esté relacionado con la manipulación del DOM, como es nuestro caso. Vamos
            // a crear la vista de la directiva a mano, y luego la vamos a compilar con el
            // scope para que adquiera la funcionalidad que esté definida en él. Por último,
            // sustituimos el elemento del DOM actual por nuestra nueva vista compilada.
            link: function(scope, elemento) {

                // La vista de nuestra directiva está contenida dentro de un <div>.
                var vista = "<div class=\"caja-generos\">";

                // Añadimos a la vista tantos <span> de etiquetas como
                // géneros tenga la película o serie.
                for ( var f = 0, F = scope.coleccion.length; f < F; f++ ) {

                    vista += "<span class=\"label label-danger\">" + scope.coleccion[f].name + "</span>";
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