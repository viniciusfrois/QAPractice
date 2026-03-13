import inventory from '../pages/inventory';
import Login from '../pages/login'

describe('Add/Remove to Cart with success', () => {

    beforeEach(() => {
        // Arrange (Preparação)
        Login.visit();
        Login.validUser();
    });

    it('should add 1 item to cart with success', () => {
        // Act (Ação)
        inventory.addToCart('Sauce Labs Backpack');

        // Assert (Verificação)
        inventory.verifyCartNumber(1);
        cy.screenshot('addremovecart/add-one-item', { overwrite: true }); // Captura de tela para evidência do sucesso

    });

    it('should remove 2 items to cart with success', () => {
        // Act (Ação)
        inventory.addToCart('Sauce Labs Backpack');
        inventory.verifyCartNumber(1);
        inventory.addToCart('Sauce Labs Bike Light');
        inventory.verifyCartNumber(2);
        cy.screenshot('addremovecart/add-two-items', { overwrite: true }); // Captura de tela para evidência do sucesso
        // Assert (Verificação)
        inventory.removeFromCart('Sauce Labs Backpack');
        inventory.verifyCartNumber(1);
        inventory.removeFromCart('Sauce Labs Bike Light');
        inventory.verifyCartNumber(0);
        cy.screenshot('addremovecart/remove-two-items', { overwrite: true }); // Captura de tela para evidência do sucesso
    });

});