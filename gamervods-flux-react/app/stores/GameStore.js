var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxSummaryConstants = require('../constants/FluxSummaryConstants');
var _ = require('underscore');

// Define initial data points
var _game = {};

// Method to load game data from mock API
function loadGameData(data) {
  _game = data[0];
}

// Extend GameStore with EventEmitter to add eventing capabilities
var GameStore = _.extend({}, EventEmitter.prototype, {

  // Return Game data
  getGame: function() {
    return _game;
  },

  // Emit Change event
  emitChange: function() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {

    // Respond to RECEIVE_DATA action
    case FluxSummaryConstants.RECEIVE_DATA:
      loadGameData(action.data);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  GameStore.emitChange();

  return true;

});

module.exports = GameStore;
