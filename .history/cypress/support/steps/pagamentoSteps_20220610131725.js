import buscaPage from "../pageobjects/buscaPage";
import carrinhoPage from "../pageobjects/carrinhoPage";
import pagamentoPage from "../pageobjects/pagamentoPage";

//* global Given, Then, And, When */
Cypress.on('uncaught:exception', () => false)

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
When ("eu clicar em [string}", () => { 
     pagamentoPage.FinalizarCliCk();
})
Then ("devo ser direcionado a tela de pagamento", () => { 
    pagamentoPage.TelaPagamento();
})