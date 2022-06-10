/* global Given, Then, And, When */
Cypress.on('uncaught:exception', () => false)

import {Given, And, When, Then} from "cypress-cucumber-preprocessor/steps"
import loginPage from "../pageobjects/loginPage";

Given("que sou usuário logado no sistema", () => {
    cy.visit('https://www.shoestock.com.br/')
    loginPage.RealizarLogin();      
    }    
)
When ("clico no campo para {string}", () => {

} 
)