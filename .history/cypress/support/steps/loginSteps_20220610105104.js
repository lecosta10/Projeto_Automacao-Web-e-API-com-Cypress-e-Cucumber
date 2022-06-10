/* global Given, Then, And, When */
Cypress.on('uncaught:exception', () => false)

import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import loginPage from '../pageobjects/loginPage';
// const loginPage = new loginPage

Given("que acesso a página {string}", () => {
    loginPage.Redirect();
    } 
)

When("preencher os campos de {string}", () => {
    loginPage.RealizarLogin();
})

And("clicar em Acessar Conta {string}", () => {
    loginPage.ClickAcessar();
})

Then("realizar o login com {string}", () => {
    loginPage.confirmarLogin();
})