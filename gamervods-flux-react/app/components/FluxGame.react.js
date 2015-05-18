var React = require('react');
var FluxSummaryActions = require('../actions/FluxSummaryActions');
var _ = require('underscore');

// Flux game view
var FluxGame = React.createClass({
    getInitialState: function() {
        this.sorted_characters = {};
        var game = this.props.game;
        var self = this;
        if (game.characters_played && game.characters_played.length > 0) {
            var teamNameA = game.characters_played[0].team.name;
            this.sorted_characters["team1"] = [];
            this.sorted_characters["team2"] = [];
            _.each(game.characters_played, function(char){
                if (teamNameA == char.team.name){
                    self.sorted_characters["team1"].push(char);
                }
                else {
                    self.sorted_characters["team2"].push(char);
                }

            });
        }
        return this.sorted_characters;
    },

    // Render Game View
    render: function() {
    var game = this.props.game;
    return (
      <div className="flux-game">
          <h5>Teams</h5>
          <a href={"http://www.gamervods.com/#/games/teams/" + game.home_team.id} target="_blank">{game.home_team.name}</a> vs <a href={"http://www.gamervods.com/#/games/teams/" + game.away_team.id} target="_blank">{game.away_team.name}</a>

          <h5>Champion Select</h5>
          <div className="row">
              <div className="col s12 m6">
                  <ul className="collection">
                    {this.sorted_characters["team1"].map(function(character, index){
                    return (
                    <li className="collection-item avatar" key={index}>
                      <img src={character.character.square_image_url} alt="" className="circle" />
                      <span className="title">{character.character.name}</span>
                      <p>{character.player.player_name}<br/>{character.team.name}</p>
                      <a href={"http://www.gamervods.com/#/games/players/" + character.player.id} target="_blank">See More Videos by {character.player.player_name}<i className="mdi-action-grade"></i></a>
                    </li>
                    )
                    })}
                </ul>
              </div>
              <div className="col s12 m6">
                <ul className="collection">
                    {this.sorted_characters["team2"].map(function(character, index){
                        return (
                            <li className="collection-item avatar" key={index}>
                              <img src={character.character.square_image_url} alt="" className="circle" />
                              <span className="title">{character.character.name}</span>
                              <p>{character.player.player_name}<br/>{character.team.name}</p>
                              <a href={"http://www.gamervods.com/#/games/players/" + character.player.id} target="_blank">See More Videos by {character.player.player_name}<i className="mdi-action-grade"></i></a>
                            </li>
                        )
                    })}
                </ul>
              </div>
          </div>
      </div>
    );
    },

});

module.exports = FluxGame;