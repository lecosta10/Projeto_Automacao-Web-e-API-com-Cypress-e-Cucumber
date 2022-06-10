/// <reference types="Cypress" />

class pagamentoPage {

    FinalizarCliCk(){
        //cy.contains('Finalizar').click()
        cy.get('body > div.main > div.cart.breakpoint.main > div.cart__content > div.cart__summary > div.summary > div > a.arrow__icon.btn.btn--primary.btn--block').click()
        
    }     
    TelaPagamento(){
        cy.get('#payment-information > .summary-title').should('be.visible')
    } 
}
export default new pagamentoPage;