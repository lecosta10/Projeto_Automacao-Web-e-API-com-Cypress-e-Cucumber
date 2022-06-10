/// <reference types="Cypress" />

class buscaPage {

    EnviarGet(){
        cy.request({
    method: 'GET',
    url: 'http://dummy.restapiexample.com/api/v1/employees',
}).then(res => {
    console.log(res)
})
    }         
}

export default new buscaPage;



