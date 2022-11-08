Feature: Pagamento

    Scenario: Validar os produtos incluídos no carrinho na tela de pagamento
    
        Given que sou usuario logado no sistema
        And eu tenha um produto no carrinho
        When eu clicar em "Finalizar"
        Then devo ser direcionado a tela de pagamento
        And o produto selecionado deve ser exibido 

    Scenario: Valicar tela de pagamento
        Given que sou usuario logado no sistema
        And eu tenha um produto no carrinho
        When eu me direcionar a tela de pagamento
        Then deve exibir o resumo do pedido 
        And deve exibir o endereco principal
        And deve exibir as opcoes de pagamento 
        And deve exibir o valor total