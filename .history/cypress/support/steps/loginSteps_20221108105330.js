
Cypress.on('uncaught:exception', () => false)

import {Dado, Quando, E, Então} from "cypress-cucumber-preprocessor/steps"
import loginPage from '../pageobjects/loginPage';
// const loginPage = new loginPage

Dado("que acesso a pagina 'Advantage Demo', () => {
    loginPage.Redirect();
    } 
)
Quando("preencher os campos de {string}", () => {
    loginPage.RealizarLogin();
})
E("clicar em Acessar Conta {string}", () => {
    loginPage.ClickAcessar();
})
Então("realizar o login com {string}", () => {
    loginPage.confirmarLogin();
})