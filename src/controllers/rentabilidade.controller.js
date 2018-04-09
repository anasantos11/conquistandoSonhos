angular.module('sonhosApp')
    .controller('RentabilidadeCtrl', [function () {
        var vm = this;

        vm.atualizarGraficoRentabilidade = function () {
            
            vm.poupanca = {};
            vm.rentabilidade = {};

            var poupancaMensal = (0.7*6.25)/100;

            anoAtual=2018;

            anoFinal = anoAtual + (isNullOrEmpty(vm.periodo) ? 0 : vm.periodo);

            var anos = [];
            var acumulado = [];
            var acumuladoPoup = [];

            anos.lenght = vm.periodo;
            acumulado.lenght = vm.periodo;
            acumuladoPoup.lenght = vm.periodo;

            var anoContador = anoAtual;

            for(var i = 0 ; anoContador<anoFinal ; i++){

                anos[i]=anoContador;
                anoContador++;

            }

            if( isNullOrEmpty(vm.rf) && isNullOrEmpty(vm.rv)  && isNullOrEmpty(vm.mm) && isNullOrEmpty(vm.prev) ){

                

                

            }else{

                var totalRentabilidade = (isNullOrEmpty(vm.rentabilidadeRf) ? 0 : (vm.rentabilidadeRf/100)*vm.rf)+
                                        (isNullOrEmpty(vm.rentabilidadeRv) ? 0 : (vm.rentabilidadeRv/100)*vm.rv)+
                                        (isNullOrEmpty(vm.rentabilidadePrev) ? 0 : (vm.rentabilidadePrev/100)*vm.prev)+
                                        (isNullOrEmpty(vm.rentabilidadeMm) ? 0 : (vm.rentabilidadeMm/100)*vm.mm);
                                        

                var total = ((isNullOrEmpty(vm.rv) ? 0 : vm.rv)+
                            (isNullOrEmpty(vm.rf) ? 0 : vm.rf)+
                            (isNullOrEmpty(vm.mm) ? 0 : vm.mm)+
                            (isNullOrEmpty(vm.prev) ? 0 :vm.prev))*poupancaMensal;

                acumulado[0]=0;
                acumuladoPoup[0]=0;

                for(var i = 1; i< acumuladoPoup.lenght ;i++){

                    acumulado[i]=acumulado[i-1]+totalRentabilidade;
                    acumuladoPoup[i]=acumuladoPoup[i-1]+total;

                }

                vm.rentabilidade.labels = anos;
                vm.rentabilidade.series =[['Rentabilidade']];
                vm.rentabilidade.data = [acumulado];

                vm.poupanca.labels = anos;
                vm.poupanca.series = ['Rentabilidade','Poupança']
                vm.poupanca.data = [ acumulado,acumuladoPoup ];

                vm.mostrarGraficos = true;

            }
            

        }
    }]);

