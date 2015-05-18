var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxSummaryConstants = require('../constants/FluxSummaryConstants');
var _ = require('underscore');

// Define initial data points
var _game = {};

// Method to load product data from mock API
function loadGameData(data) {
    _game = data[0];
}

function vote(gameId) {
    _game.votes = _game.votes + 1;
}

// Extend Summary Store with EventEmitter to add eventing capabilities
var SummaryStore = _.extend({}, EventEmitter.prototype, {

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
  var text;

  switch(action.actionType) {

    // Respond to RECEIVE_DATA action
    case FluxSummaryConstants.RECEIVE_DATA:
      loadGameData(action.data);
      break;

    // Respond to SUMMARY_VOTE action
    case FluxSummaryConstants.SUMMARY_VOTE:
      vote(action.gameId);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  SummaryStore.emitChange();

  return true;

});

module.exports = SummaryStore;
