import Login from '../pages/login'
import InvetoryPage from '../pages/inventory'

describe('Login', () => {
    
        // Hooks + Page Object Model (POM) + Assertions + Screenshots
    beforeEach(() => {
        // Arrange (Preparação)
        Login.visit();
    });

    it('should display error message with invalid credentials', () => {
        // Act (Ação)
        Login.invalidUser();

        // Assert (Verificação)
        Login.invalidUserMessage();
        cy.screenshot('login/login-error', { overwrite: true }); // Captura de tela para evidência do erro
    });

    it('should login successfully with valid credentials', () => {
        // Act (Ação)
        Login.validUser();
        
        // Assert (Verificação)
        InvetoryPage.isCurrentPage();
        cy.screenshot('login/login-success', { overwrite: true }); // Captura de tela para evidência do sucesso
    });

});