/// <reference types="Cypress" />

class buscaPage {

    CampoBusca(){
        cy.get('#mobileSearch > .roboto-medium').click()
    }
    Busca(){
        cy.get('#search-input').type('Bolsa')
    }
    ValidarBusca(){
        cy.contains('bolsa').should('be.visible')
        
    }
    Autocomplete(){
         cy.get('#search-input').type('sapa')
    } 
    ValidaAltocomplete(){
         cy.contains('sapato').should('be.visible')    
    }          
}

export default new buscaPage;