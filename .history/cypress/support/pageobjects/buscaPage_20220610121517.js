/// <reference types="Cypress" />

class buscaPage {

    CampoBusca(){
        cy.get('#search-input').click()
    }
    Busca(){
        cy.get('#search-input').type('Bolsa')
    }
    ValidarBusca(){
        cy.contains('bolsa').should('be.visible')
        cy.contains('Bolsa').click()
        cy.contains('Bolsas').should('be.visible')
    }
    Autocomplete(){
         cy.get('#search-input').type('sapa')
    } 
    ValidaAltocomplete(){
         cy.contains('sapato').should('be.visible')
         
    }   
   
   
    

    
      
}

export default new buscaPage;