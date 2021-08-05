import loginPage from '../../support/pages/login/loginPage'
import opportunitiesPage from '../../support/pages/login/opportunitiesPage'

describe('POM Implementation', function() {

    beforeEach(function() {
        cy.visit('https://app.dev.energiaplus.io/');

        //Load a fixed set data located in a file
        cy.fixture('fixturesEnergyPlus/energyPlusCredentials')
        .then(credentials => {
            this.credentials = credentials;
        })
    });
    it('Should login to Energy Plus page', function() {
        loginPage.typeUsername(this.credentials.partnerRepresentative);
        loginPage.typePassword(this.credentials.standardPassword);
        loginPage.clickLogin();

        opportunitiesPage.elements.titleOpportunities().should('have.text', 'Mis oportunidades')
    })

    it('Filling in the field with a wrong user, should display the message: Incorrect user or password', function() {
        loginPage.typeUsername(this.credentials.dummyUsername);
        loginPage.typePassword(this.credentials.standardPassword);
        loginPage.clickLogin();

        loginPage.elements.errorMessage().should('have.text', 'El usuario o la contraseña son incorrectos')
    })

    it('Filling in the field with a wrong password, should display the message: Incorrect user or password', function() {
        loginPage.typeUsername(this.credentials.partnerRepresentative);
        loginPage.typePassword(this.credentials.dummyPassword);
        loginPage.clickLogin();

        loginPage.elements.errorMessage().should('have.text', 'El usuario o la contraseña son incorrectos')
    })

    it('Filling in the field with a wrong user and password, should display the message: Incorrect user or password', function() {
        loginPage.typeUsername(this.credentials.dummyUsername);
        loginPage.typePassword(this.credentials.dummyPassword);
        loginPage.clickLogin();

        loginPage.elements.errorMessage().should('have.text', 'Ha superado el número de intentos')
    })

  })

