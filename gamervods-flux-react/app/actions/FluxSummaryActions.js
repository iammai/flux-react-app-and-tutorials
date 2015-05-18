var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxSummaryConstants = require('../constants/FluxSummaryConstants');

// Define action methods
var FluxSummaryActions = {

  // Receive inital game data
  receiveGame: function(data) {
    AppDispatcher.handleAction({
        actionType: FluxSummaryConstants.RECEIVE_DATA,
        data: data
    })
  },

  // Add vote in summary
  updateVote: function(gameId) {
    AppDispatcher.handleAction({
        actionType: FluxSummaryConstants.SUMMARY_VOTE,
        gameId: gameId
    })
  },

};

module.exports = FluxSummaryActions;
