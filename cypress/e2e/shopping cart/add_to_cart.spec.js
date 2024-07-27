const ProductPage = require('../../pages/shopping cart/ProductPage');

describe('Agregar un producto al carrito de compras', () => {
  it('Debería agregar Dior J\'adore al carrito de compras', () => {
    const productName = "Dior J'adore";

    ProductPage.visit();

    ProductPage.searchProduct(productName);

    ProductPage.selectProduct();

    ProductPage.increaseQuantity();
    ProductPage.addToCart();

    cy.wait(5000);

    ProductPage.goToCart();
    ProductPage.verifyProductInCart(productName);
  });
});
