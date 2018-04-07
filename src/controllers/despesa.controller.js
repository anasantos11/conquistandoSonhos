angular.module('sonhosApp')
    .controller('DespesaCtrl', [function () {
        var vm = this;

        vm.atualizarGraficoDespesa = function () {
            vm.distribuicaoGastros = {};
            vm.comparativo = {};

            vm.totalDespesa = (isNullOrEmpty(vm.valorEssencial) ? 0 : vm.valorEssencial)
                + (isNullOrEmpty(vm.valorReducao) ? 0 : vm.valorReducao)
                + (isNullOrEmpty(vm.valorCorte) ? 0 : vm.valorCorte);
            vm.totalReceita = (isNullOrEmpty(vm.salario) ? 0 : vm.salario) +
                (isNullOrEmpty(vm.outrasReceitas) ? 0 : vm.outrasReceitas);

            vm.distribuicaoGastros.labels = ["Despesas Essenciais", "Despesas que posso reduzir", "Despesas que posso cortar"];
            vm.distribuicaoGastros.data = [isNullOrEmpty(vm.valorEssencial) ? 0 : vm.valorEssencial,
            isNullOrEmpty(vm.valorReducao) ? 0 : vm.valorReducao,
            isNullOrEmpty(vm.valorCorte) ? 0 : vm.valorCorte];
            vm.distribuicaoGastros.cutoutPercentage = true;

            vm.comparativo.labels = ["Receitas", "Despesas"];
            vm.comparativo.data = [vm.totalReceita, vm.totalDespesa];
            vm.mostrarGraficos = true;

        }
    }]);

