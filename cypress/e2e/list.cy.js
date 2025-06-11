describe('Navigation', () => {
    it('should navigate to the counter page and add 3 items to the list', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/')

      // find the "add item" button and click it
      cy.get('#add').click()
      // find the "add item" button and click it
      cy.get('#add').click()
      // find the "add item" button and click it
      cy.get('#add').click()
      // make sure we have 3 items in the list
      cy.get('li').should('have.length', 3)
    })
  })