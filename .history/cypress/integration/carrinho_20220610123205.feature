Feature: Carrinho 

    Scenario: Incluir produto no carrinho
    
        Given que sou usuário logado no sistema
        When clico em uma categoria de produtos da home
        And seleciono um produto
        And clico em comprar
        Then devo validar se o produto foi adicionado no carrinho