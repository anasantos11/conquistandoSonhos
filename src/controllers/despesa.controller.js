angular.module('sonhosApp')
    .controller('DespesaCtrl', ["$window", function ($window) {
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
            outros = { categoria: "moradia", nome: "Outros", valor: 0.00, tipo: "possoReduzir" },
            //Transporte
            carro = { categoria: "transporte", nome: "Prestação veículo", valor: 0.00, tipo: "essencial" },
            onibus = { categoria: "transporte", nome: "Passagem de ônibus", valor: 0.00, tipo: "essencial" },
            transpApp = { categoria: "transporte", nome: "Transporte privado", valor: 0.00, tipo: "possoCortar" },
            transpEscolar = { categoria: "transporte", nome: "Transporte escolar", valor: 0.00, tipo: "possoCortar" },
            estacionamento = { categoria: "transporte", nome: "Estacionamento", valor: 0.00, tipo: "possoCortar" },
            combustivel = { categoria: "transporte", nome: "Combustível", valor: 0.00, tipo: "possoReduzir" },
            manutencao = { categoria: "transporte", nome: "Manutenção", valor: 0.00, tipo: "essencial" },
            docVeiculo = { categoria: "transporte", nome: "Documentos veículo", valor: 0.00, tipo: "possoReduzir" },
            outros = { categoria: "transporte", nome: "Outros", valor: 0.00, tipo: "possoReduzir" },
            //Educacao
            escolas = { categoria: "educacao", nome: "Escola/Faculdade", valor: 0.00, tipo: "essencial" },
            cursos = { categoria: "educacao", nome: "Cursos extras", valor: 0.00, tipo: "possoReduzir" },
            material = { categoria: "educacao", nome: "Material escolar", valor: 0.00, tipo: "essencial" },
            lancheEscolar = { categoria: "educacao", nome: "Lanche escolar", valor: 0.00, tipo: "essencial" },
            outros = { categoria: "educacao", nome: "Outros", valor: 0.00, tipo: "possoReduzir" },
            //Pessoais
            celular = { categoria: "pessoais", nome: "Celular", valor: 0.00, tipo: "possoReduzir" },
            academia = { categoria: "pessoais", nome: "Academia", valor: 0.00, tipo: "possoReduzir" },
            clube = { categoria: "pessoais", nome: "Clube", valor: 0.00, tipo: "possoReduzir" },
            salao = { categoria: "pessoais", nome: "Salão de beleza", valor: 0.00, tipo: "possoCortar" },
            vestuario = { categoria: "pessoais", nome: "Vestuário", valor: 0.00, tipo: "possoCortar" },
            outros = { categoria: "pessoais", nome: "Outros", valor: 0.00, tipo: "possoReduzir" },
            //Saúde
            planoSaude = { categoria: "saude", nome: "Plano de saúde", valor: 0.00, tipo: "essencial" },
            medico = { categoria: "saude", nome: "Médico", valor: 0.00, tipo: "possoReduzir" },
            dentista = { categoria: "saude", nome: "Dentista", valor: 0.00, tipo: "possoReduzir" },
            farmacia = { categoria: "saude", nome: "Farmácia", valor: 0.00, tipo: "possoReduzir" },
            outros = { categoria: "saude", nome: "Outros", valor: 0.00, tipo: "possoReduzir" },
            //Lazer
            cinema = { categoria: "lazer", nome: "Cinema", valor: 0.00, tipo: "possoReduzir" },
            show = { categoria: "lazer", nome: "Shows", valor: 0.00, tipo: "possoReduzir" },
            teatro = { categoria: "lazer", nome: "Teatro", valor: 0.00, tipo: "possoReduzir" },
            bares = { categoria: "lazer", nome: "Bares e lanches", valor: 0.00, tipo: "possoReduzir" },
            jogos = { categoria: "lazer", nome: "Jogos", valor: 0.00, tipo: "possoReduzir" },
            outros = { categoria: "lazer", nome: "Outros", valor: 0.00, tipo: "possoReduzir" },
            //Financeiros
            reservas = { categoria: "financeiro", nome: "Reservas financeiras", valor: 0.00, tipo: "essencial" },
            cartao = { categoria: "financeiro", nome: "Cartão", valor: 0.00, tipo: "possoCortar" },
            chequeEspecial = { categoria: "financeiro", nome: "Cheque especial", valor: 0.00, tipo: "possoCortar" },
            emprestimo = { categoria: "financeiro", nome: "Empréstimos", valor: 0.00, tipo: "possoCortar" }
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

