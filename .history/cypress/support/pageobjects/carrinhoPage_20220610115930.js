// <reference types="Cypress" />

class carrinhoPage {

    Produto(){
        cy.get('#zt-home-triple-line1-rectangle-0 > .api-single-banner > .api-single-banner-link > .api-single-banner-image').click()
        cy.contains('Bota Cano Curto Shoestock Tratorada Salto Alto Feminina').should('be.visible').click()
    }
    
   
   
    

    
      
}

export default new carrinhoPage;