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
            var acumuladoRF = [];
            var acumuladoRV = [];
            var acumuladoMM = [];
            var acumuladoPrev = [];
            var acumuladoPoup = [];
            var acumuladoTotal = [];

            anos.lenght = vm.periodo;

            acumuladoRF.lenght = vm.periodo;
            acumuladoRV.lenght = vm.periodo;
            acumuladoMM.lenght = vm.periodo;
            acumuladoPrev.lenght = vm.periodo;
            acumuladoPoup.lenght = vm.periodo;

            acumuladoTotal.lenght = vm.periodo;

            var anoContador = anoAtual;

            for(var i = 0 ; anoContador<anoFinal ; i++){

                anos[i]=anoContador;
                anoContador++;

            }

            if(
                 isNullOrEmpty(vm.rf) && isNullOrEmpty(vm.rv)  && isNullOrEmpty(vm.mm) && isNullOrEmpty(vm.prev) ){

                


            }else{

                var rf = isNullOrEmpty(vm.rf) ? 0 : (vm.rf);
                var rv = isNullOrEmpty(vm.rv) ? 0 : (vm.rv);
                var prev = isNullOrEmpty(vm.prev) ? 0 : (vm.prev);
                var mm =isNullOrEmpty(vm.mm) ? 0 : (vm.mm);

                var total = rf+rv+prev+mm;

                acumuladoRF[0]=rf;
                acumuladoRV[0]=rv;
                acumuladoMM[0]=mm;
                acumuladoPrev[0]=prev;
                acumuladoTotal[0]=total;

                acumuladoPoup[0]=total;

                for(var i = 1; i < vm.periodo ;i++){

                    acumuladoRF[i]=acumuladoRF[i-1]*(isNullOrEmpty(vm.rentabilidadeRf) ? 0 : (vm.rentabilidadeRf/100)+1);
                    acumuladoRV[i]=acumuladoRV[i-1]*(isNullOrEmpty(vm.rentabilidadeRv) ? 0 : (vm.rentabilidadeRv/100)+1);
                    acumuladoPrev[i]=acumuladoPrev[i-1]*(isNullOrEmpty(vm.rentabilidadePrev) ? 0 : (vm.rentabilidadePrev/100)+1);
                    acumuladoMM[i]=acumuladoMM[i-1]*(isNullOrEmpty(vm.rentabilidadeMm) ? 0 : (vm.rentabilidadeMm/100)+1);
                    acumuladoPoup[i]=acumuladoPoup[i-1]*(poupancaMensal+1);

                    acumuladoTotal[i]=acumuladoRF[i]+acumuladoRV[i]+acumuladoPrev[i]+acumuladoMM[i];
           

                }

                vm.rentabilidade.labels = anos;
                vm.rentabilidade.series =[['Rentabilidade']];
                vm.rentabilidade.data = [acumuladoTotal];

                vm.poupanca.labels = anos;
                vm.poupanca.series = ['Rentabilidade','Poupança']
                vm.poupanca.data = [ acumuladoTotal,acumuladoPoup ];

                vm.mostrarGraficos = true;

            }
            

        }
    }]);

