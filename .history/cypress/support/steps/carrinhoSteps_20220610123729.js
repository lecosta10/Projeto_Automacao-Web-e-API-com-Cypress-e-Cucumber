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


