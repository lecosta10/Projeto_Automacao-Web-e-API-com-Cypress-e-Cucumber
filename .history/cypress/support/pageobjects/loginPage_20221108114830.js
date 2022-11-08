/// <reference types="Cypress" />

class loginPage {

    Redirect(){
        cy.visit("/")
    }
    RealizarLogin(){
        cy.get('#username').type('541202019@eniac.edu.br')
        cy.get('#password').type("Teste123")
    }
    ClickAcessar(){
        cy.get('#login-button').click()
    }
    confirmarLogin(){
        cy.get('#username-logged').should('be.visible')
        cy.contains('Olá,')
    }     
}

export default new loginPage;