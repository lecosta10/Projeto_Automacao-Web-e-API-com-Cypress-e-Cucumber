// <reference types="Cypress" />

class carrinhoPage {

    Produto(){
        cy.get('[href="//www.shoestock.com.br/bolsa-shoestock-baguete-croco-feminina-off+white-O01-4923-205"] > .item-card > .item-card__images > .item-card__images__image-link > .loaded').click()
        
    }
    
   
   
    

    
      
}

export default new carrinhoPage;