/// <reference types="Cypress" />

class loginPage {

    CampoBusca(){
        cy.get('#search-input').click()
    }
    Busca(){
        cy.get('#search-input').type('Bolsa')
    }
    

    
      
}

export default new loginPage;