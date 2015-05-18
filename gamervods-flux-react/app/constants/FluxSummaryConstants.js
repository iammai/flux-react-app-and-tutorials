var keyMirror = require('react/lib/keyMirror');

// Define action constants
module.exports = keyMirror({
  SUMMARY_VOTE: null,
  RECEIVE_DATA: null
});

//We use React’s keyMirror library to mirror our keys so that our value matches our key definition.