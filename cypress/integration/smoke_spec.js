describe('Header Verify', function() {
    it('Verify Title', function() {
        cy.visit('https://www.instagram.com/?hl=en')
        cy.title().should('eq', 'Instagram')
    })
})

describe('Input Box Verify', function() {
    it('Verify Input', function() {
        cy.visit('https://www.instagram.com/?hl=en')
        cy.title().should('eq', 'ropey')
    })
})