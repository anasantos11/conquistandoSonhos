# conquistandoSonhos

**Autores:** 
	Ana Paula dos Santos
	Carlos Felipe de Almeida Arantes

**Contexto da disciplina**

Projeto de software desenvolvido na disciplica "Interação Humano-Computador" onde foi proposta a implementação de um sistema com os conceitos aprendidos em sala de aula. 
O objetivo do sistema é projetar dados para ajudar o usuário no planejamento para a conquista de um sonho ou objetivo financeiro. Através de informações referentes às suas despesas, rendas, valor do sonho/objetivo e tempo planejado para conquistá-lo informaremos a economia necessária ao longo desse tempo e também o rendimento dessa economia caso ele aplique-a em alguns tipos de investimentos ao longo desse tempo.  

**Casos de uso**

	- Projetar rentabilidade média de aplicações: Projetará um gráfico com uma rentabilidade média para as possíveis aplicações versus a poupança, de acordo com informações que serão fornecidas pelo usuário. Mostrando a diferença de rentabilidade entre os tipos de investimentos ao longo de certo tempo. As informações serão nome, idade, valor que deseja investir e tempo em meses ou anos que deseja resgatar o investimento. 


	- Exibir distribuição de gastos financeiro por tipos de despesas: Mostrará através de gráfico a distribuição de gastos do usuário por tipos de despesas. Para isso o usuário informará a sua receita mensal e os valores que gasta em cada despesa. 

	- Simular valor de economia mensal para conquista de um sonho: Após o usuário informar o valor da compra, ano que pretende realizar o sonho, valor que já economizou, iremos sugerir um valor que ele pode economizar por mês, com base nas informações inseridas por ele, para conseguir realizar a compra na data escolhida para realizar o sonho.

**Dependências do sistema**

	- angular versão = 1.6.9
	- angular-chart.js versão =  1.1.1
	- bootstrap versão =  3.3.7
	- bootstrap-material-design versão =  4.1.1
	- chart.js versão =  2.7.2
	- jquery versão =  3.3.1
	- jquery-validation versão =  1.17.0
	- popper.js versão =  1.14.3
	- twitter-bootstrap-wizard versão =  1.2.0"
	- material-kit versão 2.0.2
	- material-bootstrap-wizard versão = 1.0.2


**Informações do desenvolvimento**
Foi utilizado o **node.js** e o pacote **gulp** para gerenciamento das dependências do projeto. 
Com o node.js realizamos a importação das bibliotecas registradas nos arquivos package.json e com o pacote gulp do npm criamos tarefas para concatenar todos os pacotes/bibliotecas em arquivos únicos (public.libs.js, public.libs.css). 


