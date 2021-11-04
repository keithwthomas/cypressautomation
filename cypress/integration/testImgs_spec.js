/// <reference types="Cypress" />

describe('Image Verify', function() {
    it('Verify Image files on page', function() {
        // verify images
        cy.waitUntil(() => cy.get('article').find('img').should('have.attr', 'src').should('include', 'd6bf0c928b5a.jpg'))
        cy.waitUntil(() => cy.get('article').find('img').should('have.attr', 'src').should('include', '6f03eb85463c.jpg'))
        cy.waitUntil(() => cy.get('article').find('img').should('have.attr', 'src').should('include', 'screenshot3.jpg'))
        cy.waitUntil(() => cy.get('article').find('img').should('have.attr', 'src').should('include', 'screenshot4.jpg'))
        cy.waitUntil(() => cy.get('article').find('img').should('have.attr', 'src').should('include', 'screenshot5.jpg'))
        // separated this test set out as there
        //is a timing issue and wait/waitfor/intercept 
        //do not do the job to catch it
    })
})
        