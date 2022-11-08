/// <reference types="Cypress" />

class buscaPage {

    CampoBusca(){
        cy.get('#mobileSearch > .roboto-medium').click()
    }
    Busca(){
        cy.get('#mobileSearch > .roboto-medium').type('tablets')
    }
    ValidarBusca(){
        cy.contains('TABLETS').should('be.visible')
        
    }
    Autocomplete(){
         cy.get('#mobileSearch > .roboto-medium').type('MI')
    } 
    ValidaAltocomplete(){
         cy.contains('MICE').should('be.visible')    
    }          
}

export default new buscaPage;