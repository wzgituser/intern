///<reference types = 'cypress'/>
require('cypress-xpath')

describe('Tc#1.2 Check integration with products list elements at react e-commerce webapp',()=>{
    before(()=>{
        cy.visit('/')
        cy.url().as('baseUrl')
    })
    it('integration "Size:" and "product list" components',()=>{
        cy.get('#root > div > main > div > div.sc-bj2vay-0.DCKcC > div:nth-child(2) > label > span').trigger('mouseover').should('be.visible')
        cy.get('#root > div > main > div > div.sc-bj2vay-0.DCKcC > div:nth-child(2) > label > span').click().should('have.css','background-color','rgb(27, 26, 32)')
        cy.get('#root > div > main > main > div').should('have.length',1)
        cy.get('#root > div > main > div > div.sc-bj2vay-0.DCKcC > div:nth-child(3) > label > span').trigger('mouseover').should('be.visible')
        cy.get('#root > div > main > div > div.sc-bj2vay-0.DCKcC > div:nth-child(3) > label > span').click().should('have.css','background-color','rgb(27, 26, 32)')
        cy.xpath('//*[@id="root"]/div/main/main/main/p').should('contain','2')
        cy.xpath('//*[@id="root"]/div/main/main/div').invoke('').should('have.length',2)
        
    })
})