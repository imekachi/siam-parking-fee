const startTime = new Date(Date.UTC(2022, 1, 1))

describe('Parking selection popup', () => {
  it('should work correctly', () => {
    cy.visit('/')
    cy.getByTestId('ParkButton').click()
    // popup shown
    cy.getByTestId('ParkSelectionPopup')
    // Backdrop works
    cy.getByTestId('ParkSelectionPopupBackdrop')
      .click(100, 100, { force: true })
      .should('not.exist')
  })
})

describe('Parking time tracking', () => {
  it('should track parking time correctly', () => {
    cy.clock(startTime)
    cy.visit('/')
    // Log parking time
    cy.getByTestId('ParkButton').click()
    cy.contains('CTW').click()
    // ParkInfo should show
    cy.getByTestId('ParkInfo')

    // Reload the page
    cy.reload()
    // simulate that time went by 5 seconds
    const durationSec = 5
    cy.tick(durationSec * 1000)
    cy.contains(`00:00:0${durationSec}`)
    cy.contains('THB 10.00')

    // Reset
    cy.getByTestId('ResetButton').click()
    cy.getByTestId('ParkInfo').should('not.exist')
  })
})

describe('Live feature', () => {
  beforeEach(() => {
    // Set the time and open the app
    cy.clock(startTime)
    cy.visit('/')

    // Log the parking time
    cy.getByTestId('ParkButton').click()
    cy.contains('CTW').click()
  })

  it('should work correctly', () => {
    // Move time by 15 seconds
    let durationSec = 15
    cy.tick(durationSec * 1000)

    // move time to trigger the setTimeout
    cy.tick(1000)
    durationSec += 1
    // should still display 0 because it's not live updating
    cy.contains('00:00:00')

    cy.getByTestId('LiveButton').click()
    // move time to trigger the setTimeout again
    cy.tick(1000)
    durationSec += 1
    cy.contains(`00:00:${durationSec}`)

    // give time to react to update properly
    cy.wait(0)
    // move time another second
    cy.tick(1000)
    durationSec += 1
    cy.contains(`00:00:${durationSec}`)

    // give time to react to update properly
    cy.wait(0)
    // move time another second
    cy.tick(1000)
    durationSec += 1
    cy.contains(`00:00:${durationSec}`)
  })

  it('should stay live after reload', () => {
    cy.getByTestId('LiveButton').click()
    cy.reload()
    cy.getByTestId('LiveButton').should('have.class', '-live')
  })
})
