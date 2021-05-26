describe('App', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/reservations',
      [
        {
        "id": 1,
        "name": "Christie",
        "date": "12/29",
        "time": "7:00",
        "number": 12
        }
      ]
    )
      .visit('http://localhost:3000/')
  })

  it('Should fetch existing reservations from API', () => {
    cy.get('h3').should('have.text', 'Christie')
  })

  it('Should be able to make a reservation from a form', () => {
    cy.get('input[name="name"]').type('Bryan')
      .get('input[name="date"]').type('1/13')
      .get('input[name="time"]').type('12:30')
      .get('input[name="number"]').type(4)
      .get('button').contains('Make Reservation').click()
  })

  it('Should display the new reservation with other reservations', () => {
    cy.get('input[name="name"]').type('Bryan')
      .get('input[name="date"]').type('1/13')
      .get('input[name="time"]').type('12:30')
      .get('input[name="number"]').type(4)
      .get('button').contains('Make Reservation').click()
      .get('h3').contains('Bryan')
  })
})
