describe('Cypress', () => {
  it('can request json data', () => {
    cy.request('http://localhost:8080/data.json')
      .then(res => res.body)
      .should('deep.equal', {
        name: 'cypress'
      })
  })

  it('can request other data', () => {
    cy.request('http://localhost:8080/README.md')
      .then(res => res.body)
      .should('contain', 'cy.request')
  })
})
