/// <reference types="Cypress" />

class APIPage {

    Validações(){
        cy.request({
            method: 'GET',
            url: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a',
        }).then(res => {
            console.log(res)
                expect(res.status).to.be.equal(200)
                expect(res.body.data).is.not.empty
            
                expect(rest.request.data[0]).to.eq('name')
               // expect(res.body.data[0]).to.have.property('employee_salary')
               // expect(res.body.data[0]).to.have.property('employee_age')
               // expect(res.body.data[0]).to.have.property('profile_image')
        })  
    }          
}

export default new APIPage;



