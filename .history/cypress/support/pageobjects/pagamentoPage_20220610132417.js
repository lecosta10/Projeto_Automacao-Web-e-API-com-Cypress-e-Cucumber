/// <reference types="Cypress" />

class pagamentoPage {

    FinalizarCliCk(){
        cy.contains('Finalizar').should('have.id', '.arrow__icon').click()
        
    }     
    TelaPagamento(){
        cy.get('#payment-information > .summary-title').should('be.visible')
    } 
}
export default new pagamentoPage;