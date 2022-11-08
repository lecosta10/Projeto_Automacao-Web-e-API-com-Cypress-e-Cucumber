// <reference types="Cypress" />

class carrinhoPage {

    clickCategoria(){
        cy.get('#tabletsImg').click()
        cy.contains('TABLETS').should('be.visible')
    }
    Produto(){
        cy.get(':nth-child(1) > :nth-child(4) > .productName').click()
    }
    ComprarClick(){
        cy.get('.fixedBtn > .roboto-medium').click()
    }
    ProdutoCarrinho(){
        cy.get('#shoppingCartLink').click()
        cy.contains('TABLET').should('be.visible')
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