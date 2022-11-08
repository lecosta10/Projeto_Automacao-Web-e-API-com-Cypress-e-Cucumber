/* global Given, Then, And, When */
Cypress.on('uncaught:exception', () => false)

import {Given, And, When, Then} from "cypress-cucumber-preprocessor/steps"
import buscaPage from "../pageobjects/buscaPage";
import loginPage from "../pageobjects/loginPage";

Given("que sou usuario logado no sistema", () => {
    loginPage.Redirect();
    loginPage.RealizarLogin(); 
    loginPage.ClickAcessar(); 
    loginPage.confirmarLogin();    
})

When ("clico no campo para {string}", () => {
    buscaPage.CampoBusca();

})

And ("digito {string}", () => {
    buscaPage.Busca();

})

Then ("devo validar se foi retornado os resultados esperados da busca",()=>{
   buscaPage.ValidarBusca();
})

Given("que sou usuario logado no sistema", () => {
    loginPage.Redirect();
    loginPage.RealizarLogin(); 
    loginPage.ClickAcessar(); 
    loginPage.confirmarLogin();    
})

When ("clico no campo para {string}", () => {
    buscaPage.CampoBusca();
})

And ("começo a digitar o nome de um produto", () => {
    buscaPage.Autocomplete();

})

Then ("o sistema deve retornar produtos referentes as primeiras letras digitadas",()=>{
   buscaPage.ValidaAltocomplete();
})

 
