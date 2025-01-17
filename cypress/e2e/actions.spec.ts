import { verifyFileSizeGreaterThan } from './util';
describe('Check actions', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit('/edit');
    cy.contains('Actions').click();
  });

  it('should download png and svg', () => {
    cy.get(`#downloadPNG`).click();
    verifyFileSizeGreaterThan('diagram', 'png', 34_000);

    cy.get(`#downloadSVG`).click();
    verifyFileSizeGreaterThan('diagram', 'svg', 10_000);

    // Verify downloaded file is different for different diagrams
    cy.contains('Sample Diagrams').click();
    cy.contains('ER').click();

    cy.get(`#downloadPNG`).click();
    verifyFileSizeGreaterThan('diagram', 'png', 35_000);

    cy.get(`#downloadSVG`).click();
    verifyFileSizeGreaterThan('diagram', 'svg', 11_000);
  });
});
