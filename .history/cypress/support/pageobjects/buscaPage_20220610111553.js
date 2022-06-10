/// <reference types="Cypress" />

class loginPage {

    CampoBusca(){
        cy.visit("https://www.shoestock.com.br/login")
    }

    
      
}

export default new loginPage;