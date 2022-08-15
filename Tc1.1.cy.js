///<reference types = 'cypress'/>
require('cypress-xpath');

describe('Tc#1.1 validation of the "Sizes" component behavior',()=>{
    before(()=>{
        cy.visit('/')
        cy.url().as('currentUrl')
    })
    it('"Sizes:"component" validation',()=>{
        cy.get('@currentUrl').then(currentUrl =>{
            cy.url().then(url =>{
                expect(url).to.eql(currentUrl)
            })
        })
        cy.get('#root > div > main > div > div.sc-bj2vay-0.DCKcC > div:nth-child(2) > label > span').trigger('mouseover').should('be.visible')
        cy.get('#root > div > main > div > div.sc-bj2vay-0.DCKcC > div:nth-child(2) > label > span').click().should('have.css','background-color','rgb(27, 26, 32)')
        cy.get('#root > div > main > div > div.sc-bj2vay-0.DCKcC > div:nth-child(2) > label > span').click().should('have.css','background-color','rgb(236, 236, 236)')
        cy.get('#root > div > main > div > div.sc-bj2vay-0.DCKcC > div:nth-child(3) > label > span').trigger('mouseover').should('be.visible')
        cy.get('#root > div > main > div > div.sc-bj2vay-0.DCKcC > div:nth-child(3) > label > span').click().should('have.css','background-color','rgb(27, 26, 32)')
        cy.get('#root > div > main > div > div.sc-bj2vay-0.DCKcC > div:nth-child(3) > label > span').click().should('have.css','background-color','rgb(236, 236, 236)')
        cy.get('#root > div > main > div > div.sc-bj2vay-0.DCKcC > div:nth-child(4) > label > span').trigger('mouseover').should('be.visible')
        cy.get('#root > div > main > div > div.sc-bj2vay-0.DCKcC > div:nth-child(4) > label > span').click().should('have.css','background-color','rgb(27, 26, 32)')
        cy.get('#root > div > main > div > div.sc-bj2vay-0.DCKcC > div:nth-child(4) > label > span').click().should('have.css','background-color','rgb(236, 236, 236)')
        cy.get('#root > div > main > div > div.sc-bj2vay-0.DCKcC > div:nth-child(5) > label > span').trigger('mouseover').should('be.visible')
        cy.get('#root > div > main > div > div.sc-bj2vay-0.DCKcC > div:nth-child(5) > label > span').click().should('have.css','background-color','rgb(27, 26, 32)')
        cy.get('#root > div > main > div > div.sc-bj2vay-0.DCKcC > div:nth-child(5) > label > span').click().should('have.css','background-color','rgb(236, 236, 236)')
        cy.get('#root > div > main > div > div.sc-bj2vay-0.DCKcC > div:nth-child(6) > label > span').trigger('mouseover').should('be.visible')
        cy.get('#root > div > main > div > div.sc-bj2vay-0.DCKcC > div:nth-child(6) > label > span').click().should('have.css','background-color','rgb(27, 26, 32)')
        cy.get('#root > div > main > div > div.sc-bj2vay-0.DCKcC > div:nth-child(6) > label > span').click().should('have.css','background-color','rgb(236, 236, 236)')
        cy.get('#root > div > main > div > div.sc-bj2vay-0.DCKcC > div:nth-child(7) > label > span').trigger('mouseover').should('be.visible')
        cy.get('#root > div > main > div > div.sc-bj2vay-0.DCKcC > div:nth-child(7) > label > span').click().should('have.css','background-color','rgb(27, 26, 32)')
        cy.get('#root > div > main > div > div.sc-bj2vay-0.DCKcC > div:nth-child(7) > label > span').click().should('have.css','background-color','rgb(236, 236, 236)')
        cy.log('done')
    })
})
