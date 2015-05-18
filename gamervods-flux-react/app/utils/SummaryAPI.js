var FluxSummaryActions = require('../actions/FluxSummaryActions');

module.exports = {

  // Load mock game data from localStorage into GameStore via Action
  getGameData: function() {
    var data = JSON.parse(localStorage.getItem('game'));
      FluxSummaryActions.receiveGame(data);
  }

};