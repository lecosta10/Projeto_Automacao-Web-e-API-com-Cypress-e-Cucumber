/// <reference types="Cypress" />

class pagamentoPage {

    FinalizarCliCk(){
        cy.get('.arrow__icon').click()

    }
      
}
export default new pagamentoPage;