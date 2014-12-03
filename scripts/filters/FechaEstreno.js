
// Filtro que establece el texto 'Se estrena en: ' concatenado a una fecha de entrada.
angular.module("misPelisSeriesApp").filter("fechaEstreno", function() {

    // Los filtros siempre retornan una función. Su cometido es, partiendo de unos datos
    // en bruto de entrada, aplicarles un formato de cara a su salida. Por tanto, siempre
    // van a tener como mínimo un parámetro de entrada, que será el dato en bruto a formatear,
    // y retornarán el mismo una vez aplicado el formato.
    return function( datoEntrada ) {

        return "Se estrena en: " + datoEntrada;
    };

});
