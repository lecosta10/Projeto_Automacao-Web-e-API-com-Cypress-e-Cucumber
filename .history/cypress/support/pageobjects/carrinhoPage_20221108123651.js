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
        cy.get('tr.ng-scope > :nth-child(2) > .roboto-regular').should('be.visible')
        cy.get('[colspan="2"] > .roboto-light').should('be.visible')
        cy.get('thead > tr > :nth-child(6) > .roboto-light').should('be.visible')
    }

    Total(){
        cy.get('[colspan="2"] > .roboto-light').should('be.visible')
    }

    NomeProduto(){
        cy.get('thead > tr > :nth-child(2) > .roboto-light').should('be.visible')
    }

    Valor(){
        cy.get(':nth-child(6) > .price').should('be.visible')
    }

    Finalizar(){
        cy.get('#checkOutButton').should('be.visible')
    }   
}

export default new carrinhoPage;