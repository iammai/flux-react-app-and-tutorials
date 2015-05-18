var React = require('react');
var FluxSummaryActions = require('../actions/FluxSummaryActions');

// Flux summary view
var FluxSummary = React.createClass({

  // Update vote via Actions
  updateVote: function(gameId) {
      FluxSummaryActions.updateVote(gameId);
  },

  // Render view
  render: function() {
    var game = this.props.game;
    var angularJsUrl = "http://www.gamervods.com/#/games/" + this.props.game.id;
    return (
        <div className="card-panel">
            <a className="btn-floating btn-large waves-effect waves-light upvote-color upvote" onClick={this.updateVote.bind(this, game.id)}>
                <i className="mdi-maps-navigation"></i><span className="upvote-count">{game.votes}</span>
            </a>
            <span className="story-header">See AngularJS alternative of game page: <a href={angularJsUrl} target="_blank">{game.name}</a></span>
        </div>
    );
  }
});

module.exports = FluxSummary;