// Modules to import the cart.js and productOwn.js in the file
import {cart, addToCart} from "../data/cart.js";
import {products} from "../data/productOwn.js";
import { formatCurrency } from "./utils/money.js";

// Accumulator Pattern
// This adds the generated HTML to the webpage using JS
// forEach so i can get all the Array in a Loop


// This variable is for combine the HTML and the Array in top
let productsHTML = '';

products.forEach((p) => {

  productsHTML += `
  <div class="product-container">
    <div class="product-image-container">
      <img class="product-image" src="${p.image}" />
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${p.productName}
    </div>

    <div class="product-rating-container">
      <img
        class="product-rating-stars"
        src="images/ratings/rating-${p.rating.stars * 10}.png"
      />
      <div class="product-rating-count link-primary">${p.rating.count}</div>
    </div>

    <div class="product-price">$${formatCurrency(p.priceCents)}</div>

    <div class="product-quantity-container">
      <select class="js-quantity-selector-${p.id}">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart js-added-to-cart-${p.id}">
      <img src="images/icons/checkmark.png" />
      Added
    </div>

    <button class="add-to-cart-button js-add-to-cart" data-product-id="${p.id}">Add to Cart</button>
  </div>
  `;
});

document.querySelector('.js-products-grid')
  .innerHTML = productsHTML;

function updateCartQuantity () {
  let cartQuantity = 0;

      cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
      });

      document.querySelector('.js-cart-quantity')
        .innerHTML = cartQuantity;

      
      // for fixing the cart quantity later

      //  console.log(cartQuantity);
      //  console.log(cart);
      
}

document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      addToCart(productId);
      updateCartQuantity();

     
    });
  });
