// <reference types="Cypress" />

class carrinhoPage {

    clickCategoria(){
        cy.contains('#Bolsas').should('have.text', 'Bolsas').click()
        cy.contains('Bolsas').should('be.visible')
    }
    Produto(){
        cy.get('[href="//www.shoestock.com.br/bolsa-shoestock-baguete-croco-feminina-off+white-O01-4923-205"] > .item-card > .item-card__images > .item-card__images__image-link > .loaded').click()
    }
    ComprarClick(){
        cy.get('#buy-button-now').click()
    }
    ProdutoCarrinho(){
        cy.contains('Bolsa').should('be.visible')
        cy.get('.cart__summary > .cart__title').should('be.visible')
        cy.get('.cart__items > .cart__title').should('be.visible')
        cy.get('#cep').should('be.visible')
    }
   
   
    

    
      
}

export default new carrinhoPage;