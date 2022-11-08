/// <reference types="Cypress" />

class loginPage {

    Redirect(){
        cy.visit("/")
        cy.get('#menuUser').click()
    }
    RealizarLogin(){
        cy.contains('username').type('teste2021')
        cy.contains('password').type("Teste@2021")
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