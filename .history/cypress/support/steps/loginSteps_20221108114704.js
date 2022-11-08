/* global Given, Then, When */
Cypress.on('uncaught:exception', () => false)

import {Given, Then, When, And} from "cypress-cucumber-preprocessor/steps"
import loginPage from '../pageobjects/loginPage';
// const loginPage = new loginPage

Given("que acesso a pagina Advantage Demo", () => {
    loginPage.Redirect();
    } 
)
Then(/^preencher os campos de Login$/, () => {
    loginPage.RealizarLogin();
})
And(/^clicar em Acessar Conta Entrar$/, () => {
    loginPage.ClickAcessar();
})
When(/^realizo o login com sucesso$/, () => {
    loginPage.confirmarLogin();
})