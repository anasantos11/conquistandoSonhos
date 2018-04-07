'use strict';

angular
    .module('sonhosApp', [
        "chart.js"
    ]);


angular
    .module('sonhosApp').config(function (ChartJsProvider) {
        Chart.defaults.global.colors = [
            '#4caf50', /*VERDE*/
            '#ff9800', /*LARANJA*/
            '#f44336', /*VERMELHO*/
            '#e91e63', /*ROSA*/
            '#9c27b0', /*ROXO*/
            '#00bcd4' /*AZUL*/
        ];
        Chart.defaults.global.legend.display = true;
   
    });


