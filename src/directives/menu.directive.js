angular
    .module('sonhosApp').directive('cabecalho', function () {
        return {
            restrict: 'E',
            template: '<nav class="navbar navbar-default mb-0 p-0">' + 
                        '<div class="container justify-content-center">' +
                        '<a  ng-href="index.html" >'+ 
                            '<img class="navbar-brand p-1" src="assets/img/logo.png" alt="Logo Conquistando Sonhos" > </a>'+
                        '</div>' +
                        '</nav>' + 
                        '<hr class="m-0">'
        };
    });