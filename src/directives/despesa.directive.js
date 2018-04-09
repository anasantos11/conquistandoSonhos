angular
    .module('sonhosApp').directive('despesa', function () {
        return {
            template: '<div class="offset-1 col-3">' + 
                        '<span class="input-group-text">' + 
                            '{{model.nome}}' + 
                        '</span>' + 
                    '</div>' + 
                    '<div class="col-3">' + 
                        '<input  ng-model="model.valor" type="number"  class="form-control" placeholder="Valor do(a) {{model.nome | lowercase}}">' + 
                    '</div>' + 
                    '<div class="col-4">' + 
                    '<select class="form-control" ng-model="model.tipo">' + 
                            '<option selected value="">Selecione</option>' + 
                            '<option value="essencial">Essencial</option>' + 
                            '<option value="possoReduzir">Posso reduzir</option>' + 
                            '<option value="possoCortar">Posso cortar</option>' + 
                        '</select>' + 
                    '</div>',
            scope: {
                model: "=",
                titulo: "="
            },
            link: function (scope, element, attrs) {
            }
        };
    });

