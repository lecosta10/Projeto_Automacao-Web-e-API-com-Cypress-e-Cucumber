/// <reference types="Cypress" />

class APIPage {

    Validações(){
        cy.request({
            method: 'GET',
            url: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a',
        }).then(res => {
            console.log(res)
                expect(res.status).to.be.equal(200)
                expect(res.body.data.list.name).to.eq("Professional")
                expect(res.body.memberCreator.username).to.eq("brian")
                expect(res.body.appCreator).to.eq("null")
                expect(res.body.data.list.name).to.eq("Professional")
                expect(res.body.data.list.name).to.eq("Professional")
                expect(res.body.data.list.name).to.eq("Professional")
                expect(res.body.data).is.not.empty
                

               
             
           
        })  
    }          
}

export default new APIPage;



