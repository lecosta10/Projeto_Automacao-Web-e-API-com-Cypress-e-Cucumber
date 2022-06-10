/* global Given, Then, And, When */
Cypress.on('uncaught:exception', () => false)
import login from '../../support/pageobjects/login';

import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
// const loginPage = new loginPage

Given("que acesso a página {string}", () => {
    login.Redirect();
    } 
)

When("preencher os campos de {string}", () => {
    login.RealizarLogin();
})

And("clicar em Acessar Conta {string}", () => {
    login.ClickAcessar();
})

Then("realizar o login com {string}", () => {
    login.confirmarLogin();
})