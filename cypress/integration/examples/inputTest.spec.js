import 'cypress-react-unit-test/support';

describe('Search for a province', () => {
    it("Display province information", () => {
        cy.visit('http://localhost:3000/')

        cy.get('input[type="text"]').type('jawa timur')
        cy.get('Button[type="submit"]').click()
        cy.get('tbody > tr > td').should('contain', 'Jawa Timur').invoke('text').should('match', /jawa timur/i)

        cy.get('.clear-button').click()
        cy.get('input[type="text"]').type('jawa barat')
        cy.get('Button[type="submit"]').click()
        cy.get('tbody > tr > td').should('contain', 'Jawa Barat').invoke('text').should('match', /jawa Barat/i)
    })
})