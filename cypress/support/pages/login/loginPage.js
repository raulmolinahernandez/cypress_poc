class loginPage{

    elements = {
        usernameInput: () => cy.get('#username'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('button[type=submit]'),
        errorMessage: () => cy.get('.sc-iBPRYJ')  
    }

    typeUsername(username){
        this.elements.usernameInput().type(username)
    }

    typePassword(password){
        this.elements.passwordInput().type(password)
    }

    clickLogin(){
        this.elements.loginBtn().click();
    }
    
}

module.exports = new loginPage();