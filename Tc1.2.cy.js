///<reference types = 'cypress'/>
require('cypress-xpath')

describe('Tc#1.2 Check integration with products list elements at react e-commerce webapp',()=>{
    before(()=>{
        cy.visit('/')
        cy.url().as('baseUrl')
    })
    it('integration "Size:" and "product list" components',()=>{
        cy.get('a')
    })
})