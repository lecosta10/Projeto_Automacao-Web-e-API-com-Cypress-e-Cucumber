/// <reference types="Cypress" />

class pagamentoPage {
    carrinho(){
        cy.get('#shoppingCartLink').should('be.visible')
    }

    FinalizarCliCk(){
        cy.get('#shoppingCartLink').click()
        cy.get('#checkOutButton').click();    
    }     
    TelaPagamento(){
        cy.get('.sticky').should('be.visible')
    } 
    produto(){
        cy.get('.product-name').should('be.visible')
    }
    Resumo(){
        cy.get('#summary > .summary-title').should('be.visible')
    }
    Endereco(){
        cy.get('.delivery-title').should('be.visible')
    }
    Opcoes(){
        cy.get('.subtitle > .ns-row > :nth-child(1)').should('be.visible')
        cy.get('.payment-with-billingslip > .subtitle').should('be.visible')
        cy.get('.payment-with-paypal > .subtitle').should('be.visible')
    }
    Valor(){
        cy.get('.total').should('be.visible')
        cy.get('.total > .ns-w8').should('be.visible')
    }
}
export default new pagamentoPage;