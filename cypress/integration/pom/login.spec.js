import loginPage from '../../pages/login/loginPage'
import opportunitiesPage from '../../pages/login/opportunitiesPage'

describe('POM Implementation', () => {

    beforeEach(() => {
        cy.visit("https://app.dev.energiaplus.io/");
    });
    it('Should login to Energy Plus page', () => {
        loginPage.typeUsername('diego.serrano');
        loginPage.typePassword('3P.d3v.test');
        loginPage.clickLogin();

        opportunitiesPage.elements.titleOpportunities().should('have.text', 'Mis oportunidades')
    })

    it.only('Should display the message: Incorrect user or password', () => {
        loginPage.typeUsername('userdummy');
        loginPage.typePassword('3P.d3v.test');
        loginPage.clickLogin();

        loginPage.elements.errorMessage().should('have.text', 'El usuario o la contraseña son incorrectos')
    })

  })

