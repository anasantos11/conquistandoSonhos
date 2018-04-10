angular.module('sonhosApp')
    .controller('SonhoCtrl', [function () {
        var vm = this;

        vm.novoSonho = function () {
            vm.valorSonho = 1000;
            vm.meses = 1;
            vm.valorPoupado = 0;
        };

        vm.novoSonho();

        vm.calcularSonho = function(){
            vm.valorSonho = validarValor(vm.valorSonho);
            vm.valorPoupado = validarValor(vm.valorPoupado);
            vm.meses = validarValor(vm.meses);
            vm.valorSobra = 0;
            vm.valorEconomizar = 0;
            if(vm.valorSonho > 0 && vm.meses > 0 ){
              var valor = (vm.valorSonho - vm.valorPoupado) / vm.meses;
                if(valor < 0){
                    vm.valorEconomizar = 0;
                    valor *= -1;
                    vm.valorSobra = valor;
                }else{
                    vm.valorEconomizar = valor;
                }
            }
        }


    }]);

