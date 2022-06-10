/// <reference types="Cypress" />

class pagamentoPage {

    FinalizarCliCk(){
        cy.get('.arrow__icon').click()
    }     
    TelaPagamento(){
        cy.get('#payment-information > .summary-title').should('be.visible')
    } 
}
export default new pagamentoPage;