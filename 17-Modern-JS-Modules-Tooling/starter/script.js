// Importing Module
// import './shoppingCart.js';
import {
  addToCart,
  totalPrice as price, // this changes the way it is called on this file
} from './shoppingCart.js';

addToCart('bread', 5);
// console.log(totalPrice, totalQuantity);
// console.log(price);

console.log('Importing module');

import * as ShoppingCart from './shoppingCart.js';

// This below is possible but not desirable
import add, { totalQuantity, cart } from './shoppingCart.js';

add('pizza', 5);

/* ShoppingCart.addToCart('bread', 6)
ShoppingCart.totalPrice */

add('pizza', 5);
add('pizza', 5);
add('pizza', 5);
console.log(cart);
