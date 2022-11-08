
Feature: Realizar busca no sistema  
    Scenario: Validar campo busca
    
        Given que sou usuario logado no sistema
        When clico no campo para "Busca" 
        And digito "tablets"
        Then devo validar se foi retornado os resultados esperados da busca

    Scenario: Validar preenchimento altomático no campo busca (Altocomplete)
       Given que sou usuario logado no sistema
        When clico no campo para "Busca" 
        And começo a digitar o nome de um produto 
        Then o sistema deve retornar produtos referentes as primeiras letras digitadas 
