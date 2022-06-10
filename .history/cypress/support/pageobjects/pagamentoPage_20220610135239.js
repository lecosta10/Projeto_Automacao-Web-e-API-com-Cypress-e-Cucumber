/// <reference types="Cypress" />

class pagamentoPage {

    FinalizarCliCk(){
        cy.get('body > div.main > div.cart.breakpoint.main > div.cart__content > div.cart__summary > div.summary > div > a.arrow__icon.btn.btn--primary.btn--block').should('be.visible').click();    
    }     
    TelaPagamento(){
        cy.get('#payment-information > .summary-title').should('be.visible')
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