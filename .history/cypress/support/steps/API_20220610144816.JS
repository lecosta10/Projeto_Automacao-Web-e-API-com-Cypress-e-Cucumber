//Cypress.on('uncaught:exception', () => false)
import {Given, And, When, Then} from "cypress-cucumber-preprocessor/steps"
import API from "../pageobjects/API"

Given("que eu tenha acesso ao endpoint", () => {

})
When ("realizo um GET na url {string}", () => {
    API.EnviarGet();
   
})
Then ("deve retornar o status code 200",()=>{
   
})
And ("deve exibir o conteudo do campo {string} da estrutura {string}", () => {

})