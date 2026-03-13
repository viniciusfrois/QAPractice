# QAPractice

- Projeto básico para aprender Cypress aplicando boas práticas como Hooks, Page Object Model (POM) e AAA (Arrange, Action, Assert), além de integração com CI do GitHub Actions.
- Utilizando o site: https://www.saucedemo.com/ para realização dos testes (Login e adicionar remover itens do carrinho)

## Objetivos

- Explorar testes automatizados com Cypress
- Utilizar padrões como Hooks, POM e AAA    
- Integrar testes com GitHub Actions para CI

## Estrutura

- `e2e`: Testes automatizados
- `pages/index.js`: Ações/Comportamento da Página (Abstração)
- `pages/elements.js`: Elementos/Seletores da Página (Abstração)
- `screenshots`: Screenshots dos testes
- `.github/workflows/`: Configuração do CI

## Requisitos

- Node.js
- Cypress

## Como executar

```bash
npm install
npx cypress open
```

## Integração CI

Os testes são executados automaticamente via GitHub Actions a cada push.
