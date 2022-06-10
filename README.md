
<h1 align="center">Automação Web e API com Cypress e Cucumber</h1>


<img src="https://cwi.com.br/wp-content/uploads/2020/10/GC_1-home.png"/>


<h3 align="rigt"> Estrutra de projeto WEB e API utilizando Cypress com Cucumber</h3>

<h4> O que é Cypress:</h4>

Cypress é um framework utilizado para automação de testes end to end. Atualmente, utiliza JavaScript como linguagem de programação e executa os testes no Chrome.

Suas principais vantagens são de possuir uma curva de aprendizado pequena e ser de fácil instalação e configuração. Em contrapartida, possui limitações por utilizar somente o Chrome como browser e não trocar de janela durante os testes.

<h4>O que é Cucumber:</h4>

Cucumber é uma ferramenta que pode ser utilizada em conjunto com o Cypress e permite a escrita de testes automatizados no formato BDD (Behaviour-Driven Development)

<h4>Configurando o Ambiente</h4>

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:


- [Node.js](https://nodejs.org/en/)
- [Cypress](https://pt-br.reactjs.org/)
- [Cucumber](https://reactnative.dev/)


Para configurar o ambiente temos que cumprir as etapas:

1. Instalar Node.js: acesse o site oficial, baixe e instale a versão para seu computador.

2. Escolher uma IDE de JavaScript para programar.

3. Instalar o Cypress com Cucumber:

I) Crie uma pasta onde ficarão os arquivos do seu projeto. Abra o terminal do windows e acesse essa mesma pasta com o seguinte comando:

$ cd /your/project/path

II) Tendo acessado a pasta do projeto, execute o comando de instalação:

$ npm install cypress cypress-cucumber-preprocessor

III) Para executar seus testes use o seguinte comando:

$ npx cypress open

