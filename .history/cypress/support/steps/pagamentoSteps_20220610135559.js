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
When ("eu clicar em {string}", () => { 
     pagamentoPage.FinalizarCliCk();
})
Then ("devo ser direcionado a tela de pagamento", () => { 
    pagamentoPage.TelaPagamento();
})
And (" o produto selecionado deve ser exibido", () => { 
    cy.get('.O01-4923-205-01 > .product-info > .product-name').should('be.visible')
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
When ("eu me direcionar a tela de pagamento", () => { 
    pagamentoPage.FinalizarCliCk();
    pagamentoPage.TelaPagamento();
})
Then ("deve exibir o resumo do pedido", () => { 
    pagamentoPage.Resumo();
})
And ("deve exibir o endereço principal", () => { 
    pagamentoPage.Endereco();
})
And ("deve exibir as opçoes de pagamento", () => { 
    pagamentoPage.Opcoes();
})
And ("deve exibir o valor total", () => { 
   pagamentoPage.Valor();
})