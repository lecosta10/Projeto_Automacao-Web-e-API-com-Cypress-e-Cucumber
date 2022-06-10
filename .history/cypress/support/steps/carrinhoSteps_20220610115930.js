//* global Given, Then, And, When */
Cypress.on('uncaught:exception', () => false)

Given("que sou usuário logado no sistema", () => {
    loginPage.Redirect();
    loginPage.RealizarLogin(); 
    loginPage.ClickAcessar(); 
    loginPage.confirmarLogin();    
})
When ("clico em um produto da home", () => {
    //buscaPage.CampoBusca();

})
