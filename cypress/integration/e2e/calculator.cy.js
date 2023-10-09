describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should have working arithmetical coperations', () => {
    cy.get('#number2').click()
    cy.get('#operator-add').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '4')
  })

  it('should be able to chain multiple operations together', () => {
    cy.get('#number2').click()
    cy.get('#operator-add').click()
    cy.get('#number2').click()
    cy.get('#operator-multiply').click()
    cy.get('#number3').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '12')
  })

  it('should be able to deal with negative numbers', () => {
    cy.get('#number2').click()
    cy.get('#operator-subtract').click()
    cy.get('#number3').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '-1')
  })

  it('should be able to deal with decimals', () => {
    cy.get('#number2').click()
    cy.get('#decimal').click()
    cy.get('#number5').click()
    cy.get('#operator-divide').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '1.25')
  })

  it('should be able to deal with very large numbers', () => {
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#operator-multiply').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '9999800001')
  })

  it('should display error for dividing by zero', () => {
    cy.get('#number9').click()
    cy.get('#operator-divide').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', 'Error')
  })
})