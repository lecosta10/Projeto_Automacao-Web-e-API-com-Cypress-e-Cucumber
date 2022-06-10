/// <reference types="Cypress" />

class loginPage {

    CampoBusca(){
        cy.get('#search-input').click()
    }
    Busca(){
        cy.get('#search-input').type('Bolsa')
    }
    ValidarBusca(){
        cy.contains('bolsa').should('be.visible')
    }
    

    
      
}

export default new loginPage;