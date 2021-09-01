describe('digitalum', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should load the correct URL', function () {
    cy.url().should('contain', '/electronics-spa/en/EUR/');
  });

  it('Has no detectable a11y violations on load (custom configuration)', () => {
    // Inject the axe-core library
    injectAxe();
    cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] });
  });
});

const injectAxe = () => {
  //cy.injectAxe();
  // cy.injectAxe is currently broken. https://github.com/component-driven/cypress-axe/issues/82

  // Creating our own injection logic
  cy.readFile('../../node_modules/axe-core/axe.min.js').then((source) => {
    return cy.window({ log: false }).then((window) => {
      window.eval(source);
    });
  });
};

describe('Lighthouse', () => {
  it('should run performance audits using custom thresholds', () => {
    cy.visit('/');

    const customThresholds = {
      performance: 50,
      accessibility: 70,
      seo: 70,
      'first-contentful-paint': 2000,
      'largest-contentful-paint': 3000,
      'cumulative-layout-shift': 0.1,
      'total-blocking-time': 500,
    };

    const desktopConfig = {
      formFactor: 'desktop',
      screenEmulation: { disabled: true },
    };

    cy.lighthouse(customThresholds, desktopConfig);
  });
});
