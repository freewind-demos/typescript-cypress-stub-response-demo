describe('Cypress', () => {
  it('can request json data', () => {
    cy.request('http://localhost:8080/data.json')
      .then(res => res.body)
      .should('deep.equal', {
        name: 'cypress'
      })
  })
})
