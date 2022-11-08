// <reference types="Cypress" />

class carrinhoPage {

    clickCategoria(){
        cy.get('#tabletsImg').click()
        cy.contains('TABLETS').should('be.visible')
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
    Resumo(){
        cy.contains('Resumo da compra').should('be.visible') 
    }
    frete(){
        cy.contains('Simule frete e prazo de entrega').should('be.visible')
    }
    Valor(){
        cy.get('[qa-auto="cart-price"]').should('be.visible')
    }
    Finalizar(){
        cy.get('.arrow__icon').should('be.visible')
    }   
}

export default new carrinhoPage;