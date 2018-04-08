angular
    .module('sonhosApp').directive('despesa', function () {
        return {
            restrict: 'AE',
            template: '<div class="row">' +
                            '<div class="form-group col-md-6">' +
                                '<label>{{titulo}}</label>' +
                                '<input ng-model="valorDespesa" type="text" class="form-control">' +
                            '</div>' +
                            '<div class="form-group col-md-6">' +
                                '<label>Classificação da Despesa</label>' +
                                '<select class="form-control" ng-model="classificacaoDespesa">' +
                                '<option selected value="">Selecione</option>' +
                                '<option value="essencial">Essencial</option>' +
                                '<option value="possoReduzir">Posso reduzir</option>' +
                                '<option value="possoCortar">Posso cortar</option>' +
                                '</select>' +
                            '</div>' +
                        '</div>',
            scope: {
                titulo: "=",
                valorDespesa: "=",
                classificacaoDespesa: "="

            },
            link: function (scope, element, attrs) {

            }
        };
    });

