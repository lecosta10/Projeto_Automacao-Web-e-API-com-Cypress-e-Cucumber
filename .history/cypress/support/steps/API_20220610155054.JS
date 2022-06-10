//Cypress.on('uncaught:exception', () => false)
import {Given, And, When, Then} from "cypress-cucumber-preprocessor/steps"
import API from "../pageobjects/API"

Given("que eu tenha acesso ao endpoint", () => {
    API.Url();
})
When ("realizo um GET na url {string}", () => {
   API.Validacoes();
})
Then ("deve retornar o status code 200",()=>{
    API.StatusCode();
})
And ("deve exibir o conteudo do campo name da estrutura list", () => {
    API.CampoName();
})