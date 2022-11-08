/// <reference types="Cypress" />

class loginPage {

    Redirect(){
        cy.visit("/")
        cy.get('#menuUser').click()
    }
    RealizarLogin(){
        cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type('teste2021')
        cy.get('[a-hint="Password"] > .inputContainer > label').type("Teste@2021")
    }
    ClickAcessar(){
        cy.get('#sign_in_btnundefined').click()
    }
    confirmarLogin(){
        cy.get('#username-logged').should('be.visible')
        cy.contains('Olá,')
    }     
}

export default new loginPage;