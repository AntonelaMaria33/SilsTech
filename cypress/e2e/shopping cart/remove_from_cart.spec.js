import ProductPage from '../../pages/shopping cart/ProductPage';
import CartPage from '../../pages/shopping cart/CartPage';

describe('Eliminar producto del carrito y verificar el total', () => {
  it('Debería permitir eliminar productos del carrito y actualizar el total correctamente', () => {
    const productName = "Dior J'adore";

    ProductPage.visit();

    ProductPage.searchProduct(productName);

    ProductPage.selectProduct();

    ProductPage.increaseQuantity();
    ProductPage.addToCart();

    cy.wait(5000);

    ProductPage.goToCart();

    CartPage.removeProduct();

    cy.get('.empty-cart').should('be.visible');
    cy.contains('span.fw-6', 'Your shopping cart is empty.').should('be.visible'); 

  });
});
