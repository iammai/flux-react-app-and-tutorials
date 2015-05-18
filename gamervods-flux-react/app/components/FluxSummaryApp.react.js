var React = require('react');
var SummaryStore = require('../stores/SummaryStore');
var GameStore = require('../stores/GameStore');
var FluxGame = require('./FluxGame.react');
var FluxSummary = require('./FluxSummary.react');
var FluxComment = require('./FluxComment.react');

// Method to retrieve state from Stores
function getSummaryState() {
  return {
    game: GameStore.getGame()
  };
}

// Define main Controller View
var FluxSummaryApp = React.createClass({

  // Get initial state from stores
  getInitialState: function() {
    return getSummaryState();
  },

  // Add change listeners to stores
  componentDidMount: function() {
    GameStore.addChangeListener(this._onChange);
    SummaryStore.addChangeListener(this._onChange);
  },

  // Remove change listers from stores
  componentWillUnmount: function() {
    GameStore.removeChangeListener(this._onChange);
    SummaryStore.removeChangeListener(this._onChange);
  },

  // Render our child components, passing state via props
  render: function() {
  	return (
      <div className="flux-summary-app">
        <FluxSummary game={this.state.game} />
        <FluxGame game={this.state.game} />
        <FluxComment url="comments.json"/>,
      </div>
  	);
  },

  // Method to setState based upon Store changes
  _onChange: function() {
    this.setState(getSummaryState());
  }

});

module.exports = FluxSummaryApp;