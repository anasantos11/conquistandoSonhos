angular.module('sonhosApp')
    .controller('DespesaCtrl', ["$window", function ($window ) {
        var vm = this;

        vm.novoSomatorio = function () {
            vm.somatorio = {
                rendas: 0,
                despesas: 0,
                despesaMoradia: 0,
                despesaEssencial: 0,
                despesaReducao: 0,
                despesaCorte: 0

            };
        };

        vm.despesas = [
            aluguel = { categoria: "moradia", nome: "Aluguel", valor: 0.00, tipo: "essencial" },
            iptu = { categoria: "moradia", nome: "IPTU", valor: 0.00, tipo: "essencial" },
            condominio = { categoria: "moradia", nome: "Condomínio", valor: 0.00, tipo: "essencial" },
            agua = { categoria: "moradia", nome: "Água", valor: 0.00, tipo: "possoReduzir" },
            luz = { categoria: "moradia", nome: "Luz", valor: 0.00, tipo: "possoReduzir" },
            gas = { categoria: "moradia", nome: "Gás", valor: 0.00, tipo: "essencial" },
            telefoneFixo = { categoria: "moradia", nome: "Telefone fixo", valor: 0.00, tipo: "possoReduzir" },
            tv = { categoria: "moradia", nome: "Televisão", valor: 0.00, tipo: "possoReduzir" },
            internet = { categoria: "moradia", nome: "Internet", valor: 0.00, tipo: "possoReduzir" },
            empregados = { categoria: "moradia", nome: "Empregado(a)", valor: 0.00, tipo: "possoCortar" },
            supermercado = { categoria: "moradia", nome: "Supermercado", valor: 0.00, tipo: "possoReduzir" },
            outros = { categoria: "moradia", nome: "Outros", valor: 0.00, tipo: "possoReduzir" }
        ]


        vm.atualizarValores = function () {
            vm.novoSomatorio();
            vm.somatorio.rendas = validarValor(vm.salario) + validarValor(vm.outrasReceitas);
            angular.forEach(vm.despesas, function (value, key) {
                var valor = validarValor(value.valor);
                vm.somatorio.despesas += valor;

                if (value.categoria == "moradia") {
                    vm.somatorio.despesaMoradia += valor;
                }

                if (value.tipo == "essencial") {
                    vm.somatorio.despesaEssencial += valor;
                } else if (value.tipo == "possoReduzir") {
                    vm.somatorio.despesaReducao += valor;
                } else if (value.tipo == "possoCortar") {
                    vm.somatorio.despesaCorte += valor;
                }

            });
        }

        vm.gerarGraficos = function () {
            vm.atualizarValores();
            $window.localStorage.setItem('dadosGraficos', JSON.stringify(vm.somatorio));
            $window.location.href = "resultado-despesa.html";
        }
    }]);

