describe('Navigation', () => {
    it('should navigate to the counter page', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/')
   
      // Find a button that adds 1 to the counter
      cy.get('#augment').click()
      // The counter should be 1
      cy.get('p').contains('1')
      // click augment again
      cy.get('#augment').click()
      // The counter should be 2
      cy.get('p').contains('2')
      // click diminuer
      cy.get('#diminuer').click()
      // The counter should be 1
      cy.get('p').contains('1')
      // click diminuer again
      cy.get('#diminuer').click()
      // The counter should be 0
      cy.get('p').contains('0')
    })
  })