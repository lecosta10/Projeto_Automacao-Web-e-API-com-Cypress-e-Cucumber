import buscaPage from "../pageobjects/buscaPage";
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
/********************************************************************************************************************/
Given("que sou usuário logado no sistema", () => {
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
Then ("deve ser exibido um resumo da compra", () => { 
    carrinhoPage.Resumo(); 
})
And ("deve exibir a opção de frete", () => { 
     carrinhoPage.frete();
})
And ("deve exibir o valor do produto", () => { 
     carrinhoPage.Valor();
})
And ("deve exibir um botão para finalizar", () => { 
     carrinhoPage.Finalizar();
})
