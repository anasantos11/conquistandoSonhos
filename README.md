# conqueringDreams

Sistema para projeção de dados para ajudar o usuário no planejamento para a conquista de um sonho ou objetivo financeiro. Através de informações referentes às suas despesas, receitas, valor do sonho/objetivo e tempo planejado para conquistá-lo informaremos a economia necessária ao longo desse tempo e também o rendimento dessa economia caso ele aplique-a em alguns tipos de investimentos ao longo desse tempo.  

Para compilar o projeto você precisará do **node.js e do pacote gulp**

Após o download do **node.js** basta executar o comando abaixo, no diretório do projeto, para instalação do pacote gulp: 

	- npm install --global gulp-cli
	
	
**Compilando**

Para compilar o projeto, após tudo instalado, execute os comandos abaixo no diretório do projeto:

	- npm install
	- gulp
	
Quando executar o gulp será criado os arquivos unificados (public.libs.css, public.libs.js) e os fonts das bibliotecas públicas usadas no projeto.

**Executando a aplicação**

Agora é só executar um servidor web a partir da pasta src do projeto. 
Se preferir pode usar o pacote HTTP-SERVER. 
Para instalar, execute o compando abaixo no diretório do projeto: 

	- npm install http-server -g
	
Após a instalação é só abrir o terminal na pasta src do projeto e executar **http-server -c-1** e abrir a url **localhost:8080** no seu navegador.


