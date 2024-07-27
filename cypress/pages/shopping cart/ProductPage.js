class ProductPage {
    visit() {
      cy.visit('/');
    }
  
    searchProduct(productName) {
      cy.get('.form-control', { timeout: 10000 }).click().type(productName);
      cy.get('.search-btn', { timeout: 10000 }).click();
    }
  
    selectProduct() {
      cy.get('.img-cover', { timeout: 10000 }).first().click();
    }
  
    increaseQuantity() {
      cy.get('button.qty-increase', { timeout: 10000 }).click();
    }
  
    addToCart() {
      cy.get('button.add-to-cart-btn', { timeout: 10000 }).click();
    }
  
    goToCart() {
      cy.get('.fa-cart-shopping', { timeout: 10000 }).click();
    }

  
    verifyProductInCart(productName) {
      cy.get('.cart-ctable').click();
      cy.get('.cart-ctxt').contains(productName).should('be.visible');
    }
  }

  
  module.exports = new ProductPage();
  
  
  