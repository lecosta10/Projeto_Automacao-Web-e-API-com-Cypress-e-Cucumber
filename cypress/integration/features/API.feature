Feature: Teste de API

    Scenario: Validar retorno da API
        Given que eu tenha acesso ao endpoint 
        When realizo um GET na url "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a"
        Then deve retornar o status code 200
        And deve exibir o conteudo do campo name da estrutura list

