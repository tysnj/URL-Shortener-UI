Cypress.Commands.add('stubGet', () => {
  const baseUrl = 'http://localhost:3001/api/v1'
  cy.fixture('urlData.json')
    .then(data => {
      cy.intercept(`${baseUrl}/urls`, {
        statusCode: 201,
        delay: 100,
        body: data
      })
    })
})