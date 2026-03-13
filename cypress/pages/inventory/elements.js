export const elements = {
    title: '[data-test="title"]',
    cart: '[data-test="shopping-cart-link"]',
    cartNumber: '.shopping_cart_badge',
    addItemToCart: (item) => `[data-test="add-to-cart-${formatText(item)}"]`,
    removeItemFromCart: (item) => `[data-test="remove-${formatText(item)}"]`
    
}

function formatText(text) {
    return text.replaceAll(' ', '-').toLowerCase();
}