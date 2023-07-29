// Importing Module

console.log('Importing module');
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import {
  addToCart,
  totalPrice as price, // this changes the way it is called on this file
  totalQuantity,
  cart,
} from './shoppingCart.js';
import add from './shoppingCart.js';
import * as ShoppingCart from './shoppingCart.js';

// addToCart('bread', 5);
// console.log(totalPrice, totalQuantity);
// console.log(price);

/* ShoppingCart.addToCart('bread', 6)
ShoppingCart.totalPrice */

/* add('pizza', 5);
add('pizza', 5);
add('pizza', 5); */

// console.log(cart);

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
    { product: 'garlic', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateCloneDeep = cloneDeep(state);
state.user.loggedIn = false;
console.log(state); // false
console.log(stateClone); // false
console.log(stateCloneDeep); // true
