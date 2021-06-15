describe('Form', () => {
  beforeEach(() => {
    cy.stubGet()
    cy.visit('/')
  })

  it('Should render text in input fields when filled', () => {
    cy.fillForm()
    cy.get('form').get('[name="title"]').should('have.value', 'Awesomer photo')
    cy.get('form').get('[name="urlToShorten"]').should('have.value', 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
  })

  it('Should clear the form after submission', () => {
    cy.stubPost()
    cy.fillForm()
    cy.get('button').click()
    cy.get('form').get('[name="title"]').should('have.value', '')
    cy.get('form').get('[name="urlToShorten"]').should('have.value', '')
  })

  it('Should render the submitted url', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
      statusCode: 201,
      body: {
        "title": "Awesomer photo",
        "long_url": "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80", 
        "id": 5, 
        "short_url": "http://localhost:3001/useshorturl/5"
      }
    })    
    cy.fillForm()
    cy.get('button').click()
    cy.get('section').children('.url').should('have.length', 5);    
    cy.get('.url').eq(5).contains('Awesomer photo')
  })

})