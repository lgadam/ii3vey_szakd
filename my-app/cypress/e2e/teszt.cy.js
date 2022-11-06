describe('1. teszt oldal elérése', () => {
  it('Az oldal betöltött', () => {
    cy.visit('http://localhost:3000')
  })
})

describe('2. teszt termék megjelenítő oldal', () => {
  it('Sikeresen megtalálta a terméket', () => {
    cy.get('[class="link-search"]').first().click()
    cy.get('[class="sc-lbOyJj dCMMYN"]').should('contain','Lafi fruit citrus mix')
  })
})

describe('3. teszt termék mennyiség változtatása', () => {
  it('Sikeresen vátloztatta a mennyiséget', () => {
    cy.get('[data-testid="AddIcon"]').click()
    cy.get('[class="sc-dwLEzm jKMrpl"]').should('contain','2')
    cy.get('[data-testid="RemoveIcon"]').click()
    cy.get('[class="sc-dwLEzm jKMrpl"]').should('contain','1')
  })
  it('Mennyiség nem mehet 0, vagy az alá', () => {
    cy.get('[data-testid="RemoveIcon"]').click()
    cy.get('[class="sc-dwLEzm jKMrpl"]').should('contain','1')
  })
})

describe('4. teszt kosárba hozzáadás', () => {
  it('Sikeresen hozzáadva a termék a kosárhoz', () => {
    cy.contains('button','Kosárba helyezés').click()
    cy.get('*[class^="MuiBadge-badge"]').should('contain','1')
  })
})
describe('5. teszt kosár megjelenítő oldal', () => {
  it('Sikeresen megtalálta a terméket', () => {
    cy.get('*[class^="MuiBadge-badge"]').click()
    cy.get('[class="sc-ZyCDH kQIHqq"]').should('contain','Kosár')
  })
})
describe('6. teszt fizetés tesztelése', () => {
  it('Fizetés gomb funkcionalitása', () => {
    cy.contains('button','Fizetés').click()
  })
})
describe('7. bejelentkezés', () => {
  it('Bejelentkezés helyes adatokkal', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('[class="sc-eEOqmf fA-dtAu"][placeholder="felhasználónév"]').type("admin")
    cy.get('[class="sc-eEOqmf fA-dtAu"][placeholder="jelszó"]').type("123456")
    cy.contains('button','Belépés').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})