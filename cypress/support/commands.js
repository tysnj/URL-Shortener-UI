Cypress.Commands.add('stubGet', () => {
  const baseUrl = 'http://localhost:3001/api/v1'
    cy.intercept(`${baseUrl}/urls`, {
      "urls": [
        {
          "id": 1,
          "long_url": "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          "short_url": "http://localhost:3001/useshorturl/1",
          "title": "Awesome photo 1"
        },
        {
          "id": 2,
          "long_url": "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          "short_url": "http://localhost:3001/useshorturl/2",
          "title": "Awesome photo 2"
        },
        {
          "id": 3,
          "long_url": "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          "short_url": "http://localhost:3001/useshorturl/3",
          "title": "Awesome photo 3"
        },
        {
          "id": 4,
          "long_url": "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          "short_url": "http://localhost:3001/useshorturl/4",
          "title": "Awesome photo 4"
        }
      ]
    });
    cy.intercept('POST', `${baseUrl}/urls`, {
      "title": "Awesomer photo",
  "long_url": "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80", 
  "id": 5, 
  "short_url": "http://localhost:3001/useshorturl/5"
});
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