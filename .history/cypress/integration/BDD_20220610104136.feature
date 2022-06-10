
Feature: Página de login 

    Scenario: Realizar login no sistema
        Given que acesso a página "shoestock" 
        When preencher os campos de "Login"
        And clicar em Acessar Conta "Entrar"
        Then realizar o login com "sucesso" 
