import { elements as el } from './elements';

class Login {

    visit() {
        cy.visit('https://www.saucedemo.com/');
    }

    validUser() {
        cy.get(el.usernameInput).type('standard_user');
        cy.get(el.passwordInput).type('secret_sauce');
        cy.get(el.loginButton).click();
    }

    invalidUser() {
        cy.get(el.usernameInput).type('invalid_user');
        cy.get(el.passwordInput).type('invalid_password');
        cy.get(el.loginButton).click();
    }

        invalidUserMessage() {
        cy.get(el.errorMessage).should('be.visible');
        cy.get(el.errorMessage).should('contain.text', 'Username and password do not match any user in this service');
    }

}

export default new Login()