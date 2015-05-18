var keyMirror = require('react/lib/keyMirror');

// Define action constants
module.exports = keyMirror({
  CART_ADD: null,
  CART_REMOVE: null,
  CART_VISIBLE: null,
  SET_SELECTED: null,
  RECEIVE_DATA: null
});

//We use React’s keyMirror library to mirror our keys so that our value matches our key definition.