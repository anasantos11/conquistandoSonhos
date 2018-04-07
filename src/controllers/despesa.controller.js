angular.module('sonhosApp')
    .controller('DespesaCtrl', [function () {
        var despesa = this;

        despesa.atualizarGraficoDespesa = function () {
            despesa.distribuicaoGastros = {};
            despesa.comparativo = {};

            despesa.totalDespesa = despesa.valorEssencial + despesa.valorReducao + despesa.valorCorte;
            despesa.totalReceita = despesa.salario + despesa.outrasReceitas;

            despesa.distribuicaoGastros.labels = ["Despesas Essenciais", "Despesas que posso reduzir", "Despesas que posso cortar"];
            despesa.distribuicaoGastros.data = [despesa.valorEssencial, despesa.valorReducao, despesa.valorCorte];
            despesa.distribuicaoGastros.cutoutPercentage  = true;

            despesa.comparativo.labels = ["Receitas", "Despesas"];
            despesa.comparativo.data = [despesa.totalReceita, despesa.totalDespesa];
            despesa.mostrarGraficos = true;

        }
    }]);

