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
        cy.get('#userCart > :nth-child(3) > :nth-child(1)').should('be.visible')
    }

    Resumo(){
        cy.get('h5.roboto-regular').should('be.visible')
    }

    Endereco(){
        cy.get('#userDetails > :nth-child(2)').should('be.visible')
    }

    Opcoes(){
        cy.get('[ng-class="{ selected : !firstTag }"]').should('be.visible')
    }

    Valor(){
        cy.get(':nth-child(5) > .roboto-bold').should('be.visible')
    }
}
export default new pagamentoPage;