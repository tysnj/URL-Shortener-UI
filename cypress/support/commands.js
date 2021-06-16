Cypress.Commands.add('stubGet', () => {
  const baseUrl = 'http://localhost:3001/api/v1'
    cy.fixture('getData.json')
      .then(data => {
        cy.intercept('GET', `${baseUrl}/urls`, data)
      })
})

Cypress.Commands.add('stubPost', () => {
  const baseUrl = 'http://localhost:3001/api/v1'
  cy.fixture('postData.json')
    .then(data => {
      cy.intercept('POST', `${baseUrl}/urls`, {
        statusCode: 201,
        body: data,
      })
    })
})

Cypress.Commands.add('fillForm', () => {
  cy.get('form').get('[name="title"]').type("Awesomer photo")
  cy.get('form').get('[name="urlToShorten"]').type("https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80")
})