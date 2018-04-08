angular
    .module('sonhosApp').directive('despesa', function () {
        return {
            restrict: 'AE',
            template: '<div class="offset-1 col-2">' + 
                        '<span class="input-group-text">' + 
                            '{{titulo}}' + 
                        '</span>' + 
                    '</div>' + 
                    '<div class="col-4">' + 
                        '<input type="number" min="1" step="any" class="form-control" placeholder="Valor do {{titulo | lowercase}}">' + 
                    '</div>' + 
                    '<div class="col-4">' + 
                    '<select class="form-control" ng-model="tipoDespesa">' + 
                            '<option selected value="">Selecione</option>' + 
                            '<option value="essencial">Essencial</option>' + 
                            '<option value="possoReduzir">Posso reduzir</option>' + 
                            '<option value="possoCortar">Posso cortar</option>' + 
                        '</select>' + 
                    '</div>',
            scope: {
                titulo: "=",
                valorDespesa: "=",
                tipoDespesa: "="

            },
            link: function (scope, element, attrs) {

            }
        };
    });

