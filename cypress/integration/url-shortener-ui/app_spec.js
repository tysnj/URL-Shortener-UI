describe('App', () => {
  beforeEach(() => {
    cy.stubGet()
    cy.visit('/')
  })

  it('Should do something', () => {
    expect(true).toBe(true);
  })

  it('Should render a title', () => {
    cy.get('h1').contains('URL Shortener')
  })

  it('Should render existing shortened URLs', () => {
    cy.get('section').within(() => {
      cy.get('.url').should('have.length', 4);
    })
  })

  it('Should render a form with proper inputs', () => {
    cy.get('form').get('[name="title"]').should('be.visible')
    cy.get('form').get('[name="urlToShorten"]').should('be.visible')
  })
})