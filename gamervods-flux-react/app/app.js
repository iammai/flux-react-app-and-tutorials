var React = require('react');
var GameData = require('./GameData');
var SummaryAPI = require('./utils/SummaryAPI');
var FluxSummaryApp = require('./components/FluxSummaryApp.react');

// Load Mock Game Data into localStorage
GameData.init();

// Load Mock API Call
SummaryAPI.getGameData();

// Render FluxGamerApp Controller View
React.render(
    <FluxSummaryApp />,
    document.getElementById('gamer-view')
);
