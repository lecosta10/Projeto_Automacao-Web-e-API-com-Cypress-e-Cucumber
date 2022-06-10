Feature: Pagamento

    Scenario: Validar os produtos incluídos no carrinho na tela de pagamento
    
        Given que sou usuário logado no sistema
        And eu tenha um produto no carrinho
        When eu clicar em "Finalizar"