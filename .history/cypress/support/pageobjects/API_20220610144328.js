/// <reference types="Cypress" />

class buscaPage {

    EnviarGet(){
        cy.request({
            method: 'GET',
            url: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a',
        }).then(res => {
            console.log(res)
        })
    }         
}

export default new buscaPage;



