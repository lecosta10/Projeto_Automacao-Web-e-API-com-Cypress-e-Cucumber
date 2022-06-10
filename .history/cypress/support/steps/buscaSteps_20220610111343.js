/* global Given, Then, And, When */
Cypress.on('uncaught:exception', () => false)

import {Given, And, When, Then} from "cypress-cucumber-preprocessor/steps"
import login from '../../support/pageobjects/login';

Given("que sou usuário logado no sistema", () => {
    cy.visit('https://www.shoestock.com.br/')
    login.RealizarLogin();        
    }    
)
When ("clico no campo para {string}", () => {

} 
)