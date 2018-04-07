angular
    .module('sonhosApp').directive('cabecalho', function () {
        return {
            restrict: 'E',
            template: '<nav class="navbar navbar-default mb-0 p-0">' + 
                        '<div class="container justify-content-center">' +
                            '<img class="navbar-brand" src="assets/img/logo.png" alt="Logo Conquistando Sonhos" href="#">'+
                        '</div>' +
                        '</nav>' + 
                        '<hr class="m-0">'
        };
    });