/// <reference types="Cypress" />

class pagamentoPage {

    FinalizarCliCk(){
        cy.contains('Finalizar').click()
        
    }     
    TelaPagamento(){
        cy.get('#payment-information > .summary-title').should('be.visible')
    } 
}
export default new pagamentoPage;