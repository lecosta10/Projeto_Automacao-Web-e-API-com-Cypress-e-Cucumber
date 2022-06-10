/// <reference types="Cypress" />

class loginPage {

    CampoBusca(){
        cy.get('#search-input').click()
    }

    
      
}

export default new loginPage;