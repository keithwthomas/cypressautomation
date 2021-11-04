/// <reference types="Cypress" />

describe('UI Elements', function() {
    it('Verify Inputs and buttons', function() {
        // code
        cy.visit("https://www.instagram.com/")  // Visit URL
        cy.url().should('include', 'instagram')  //URL should include 'instagram'

        // title verification
        cy.title().should('eq','Instagram')  // title verification

        // check if user is logged in and log out if true
        cy.get("body").then($body => {
            if ($body.find('button').text('Switch')) {
                cy.log("not there")
            } else {                
                cy.contains('button', 'Switch').should('be.visible').click()
            }
        })
        // div labels
        cy.contains('div.rgFsT > div:nth-child(1)', 'Instagram').should('be.visible')
        cy.contains('div.K-1uj.Z7p_S > div._0tv-g', 'or').should('be.visible')
        // Facebook button
        cy.contains('button', 'Facebook').should('be.visible').should('be.enabled')

        // lost password
        cy.contains('Forgot password').should('be.visible').request({
            url: '/accounts/password/reset/',
            followRedirect: false,
        }).then((resp) => {
            expect(resp.status).to.eq(200)  // 302 is the redirect status code
        })

        // login and password #1 - empty
        cy.get(':nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ').should('be.visible').should('be.enabled')
        cy.get(':nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ').should('be.visible').should('be.enabled')
        // login button should be disabled if login and password are not populated
        cy.get('.kEKum > :nth-child(3)').should('be.visible')
        //cy.get('.kEKum > :nth-child(3)').click() // sign in

        // login and password #2 - populated
        cy.get(':nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ').should('be.visible').should('be.enabled').type('username@here.com')
        cy.get(':nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ').should('be.visible').should('be.enabled').type('password')
        // login button should not be disabled if login and password are populated
        cy.get('.kEKum > :nth-child(3)').should('be.visible')

        //cy.get('.kEKum > :nth-child(3)').click() // sign in
    })
})