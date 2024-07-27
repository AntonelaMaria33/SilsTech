class CartPage {
  visit() {
    cy.visit('/cart'); 
    cy.get('.cart-ctable').click(); 
  }

  getCartCount() { 
    return cy.get('Your shopping cart is empty.');
  }

  getCartTotal() {
    return cy.get('.total-txt.flex.align-center.justify-end'); 
  }

  removeProduct() {
    cy.get('.delete-btn').click();
  }
}

export default new CartPage();
