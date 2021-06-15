describe('Form', () => {
  beforeEach(() => {
    cy.stubGet()
    cy.visit('/')
  })

  it('Should render text in input fields when filled', () => {
    cy.get('form').get('[name="title"]').type('Awesomer photo')
    cy.get('form').get('[name="urlToShorten"]').type('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
    cy.get('form').get('[name="title"]').contains('Awesomer photo')
    cy.get('form').get('[name="urlToShorten"]').contains('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
  })
})