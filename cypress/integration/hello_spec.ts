describe('Cypress', () => {

  beforeEach(() => {
    cy.visit('http://localhost:13423');
  });

  it('can request json data', () => {
    cy.get('button').click();
    cy.get('#data').should('have.text', 'Hello, cypress!')
  })

  it('can stub response', () => {
    cy.server();

    cy.route('GET', '/data.json', {
      message: 'Hello, stubbed response!'
    })

    cy.get('button').click();

    cy.get('#data').should('have.text', 'Hello, stubbed response!')
  })
})
