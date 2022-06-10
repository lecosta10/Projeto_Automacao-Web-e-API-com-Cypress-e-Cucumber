
Feature: Realizar busca no sistema  
    Scenario: Validar campo busca
    
        Given que sou usuário logado no sistema
        When clico no campo para "Busca" 
        And digito "Bolsa"
        Then devo validar se foi retornado os resultados esperados da busca