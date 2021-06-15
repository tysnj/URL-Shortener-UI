describe('App', () => {
  beforeEach(() => {
    cy.interceptUrls()
    cy.visit('/')
  })

  it('Should do something', () => {
    expect(true).toBe(true);
  })
})