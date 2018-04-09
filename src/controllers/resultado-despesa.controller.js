angular.module('sonhosApp')
    .controller('ResultadoDespesaCtrl', ["$window", "$filter", function ($window, $filter) {
        var vm = this;
        vm.somatorio = JSON.parse($window.localStorage.getItem('dadosGraficos'));
        localStorage.removeItem('dadosGraficos');

        vm.distribuicaoGastos = {};
        vm.comparativo = {};

        vm.distribuicaoGastos.labels = ["Despesas Essenciais", "Despesas que posso reduzir", "Despesas que posso cortar"];
        vm.distribuicaoGastos.data = [vm.somatorio.despesaEssencial, vm.somatorio.despesaReducao, vm.somatorio.despesaCorte];


        vm.comparativo.labels = ["Rendas", "Despesas"];
        vm.comparativo.data = [vm.somatorio.rendas, vm.somatorio.despesas];

    }]);