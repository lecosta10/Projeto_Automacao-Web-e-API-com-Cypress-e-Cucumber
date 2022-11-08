import loginPage from "../pageobjects/loginPage";
import carrinhoPage from "../pageobjects/carrinhoPage";

//* global Given, Then, And, When */
Cypress.on('uncaught:exception', () => false)

Given("que sou usuário logado no sistema", () => {
    loginPage.Redirect();
    loginPage.RealizarLogin(); 
    loginPage.ClickAcessar(); 
    loginPage.confirmarLogin();    
})

When ("clico em uma categoria de produtos da home", () => { 
    carrinhoPage.clickCategoria();
})

And ("seleciono um produto", () => { 
    carrinhoPage.Produto();
})

And ("clico em comprar", () => { 
    carrinhoPage.ComprarClick();   
})

Then ("devo validar se o produto foi adicionado no carrinho", () => { 
    carrinhoPage.ProdutoCarrinho();   
})

Given("que sou usuario logado no sistema", () => {
    loginPage.Redirect();
    loginPage.RealizarLogin(); 
    loginPage.ClickAcessar(); 
    loginPage.confirmarLogin();    
})

And ("eu tenha um produto no carrinho", () => { 
    carrinhoPage.clickCategoria();
    carrinhoPage.Produto();
    carrinhoPage.ComprarClick();    
})

When ("eu visualizar a tela", () => { 
    carrinhoPage.ProdutoCarrinho(); 
})

Then ("deve ser exibido o valor total da compra", () => { 
    carrinhoPage.Total(); 
})

And ("deve exibir o nome do produto", () => { 
     carrinhoPage.NomeProduto();
})

And ("deve exibir o valor do produto", () => { 
     carrinhoPage.Valor();
})

And ("deve exibir um botao para finalizar", () => { 
     carrinhoPage.Finalizar();
})
