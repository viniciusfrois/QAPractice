import { elements as el } from './elements';

class InvetoryPage {

    isCurrentPage() {
        cy.url().should('equal', 'https://www.saucedemo.com/inventory.html');
        cy.get(el.title).should('have.text', 'Products');
        cy.get(el.cart).should('be.visible');

    }

    addToCart(item) {
        cy.get(el.addItemToCart(item)).click();
    }

    removeFromCart(item) {
        cy.get(el.removeItemFromCart(item)).click();
    }

    verifyCartNumber(expectedNumber) {
        if (expectedNumber > 0) {
            cy.get(el.cartNumber).should('be.visible').and('have.text', expectedNumber.toString());
        } else {
            cy.get(el.cartNumber).should('not.exist');
        }

    }
}

export default new InvetoryPage()