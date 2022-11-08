Feature: Carrinho 

    Scenario: Incluir produto no carrinho
    
        Given que sou usuário logado no sistema
        When clico em uma categoria de produtos da home
        And seleciono um produto
        And clico em comprar
        Then devo validar se o produto foi adicionado no carrinho

    Scenario: Validar pagina de carrinho    
        Given que sou usuario logado no sistema
        And eu tenha um produto no carrinho
        When eu visualizar a tela
        Then deve ser exibido o valor total da compra
        And deve exibir o nome do produto
        And deve exibir o valor do produto
        And deve exibir um botao para finalizar
        