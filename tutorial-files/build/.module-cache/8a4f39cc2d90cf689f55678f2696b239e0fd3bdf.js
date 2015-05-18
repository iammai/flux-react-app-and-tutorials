
//Dispatchers
var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = function(action) {
    this.dispatch({
        source: 'VIEW_ACTION',
        action: action
    });
}

module.exports = AppDispatcher;

ShoeStore.dispatcherIndex = AppDispatcher.register(function(payload) {

});


//Stores
var AppDispatcher = require('../dispatcher/AppDispatcher');
var ShoeConstants = require('../constants/ShoeConstants');
var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');

// Internal object of shoes
var _shoes = {};

// Method to load shoes from action data
function loadShoes(data) {
    _shoes = data.shoes;
}

// Merge our store with Node's Event Emitter
var ShoeStore = merge(EventEmitter.prototype, {

    // Returns all shoes
    getShoes: function() {
        return _shoes;
    },

    emitChange: function() {
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }

});

// Register dispatcher callback
AppDispatcher.register(function(payload) {
    var action = payload.action;
    var text;
    // Define what to do for certain actions
    switch(action.actionType) {
        case ShoeConstants.LOAD_SHOES:
            // Call internal method based upon dispatched action
            loadShoes(action.data);
            break;

        default:
            return true;
    }

    // If action was acted upon, emit change event
    ShoeStore.emitChange();

    return true;

});

module.exports = ShoeStore;


//Action Creators are collections of methods that are called within views (or anywhere else for that matter) to send actions to the Dispatcher
var keyMirror = require('react/lib/keyMirror');

module.exports = keyMirror({
    LOAD_SHOES: null
});

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ShoeStoreConstants = require('../constants/ShoeStoreConstants');

var ShoeStoreActions = {

    loadShoes: function(data) {
        AppDispatcher.handleAction({
            actionType: ShoeStoreConstants.LOAD_SHOES,
            data: data
        })
    }

};

module.exports = ShoeStoreActions;

// Controller views are really just React components that listen to change events and retrieve Application state from Stores.

/** @jsx React.DOM */

var React = require('react');
var ShoesStore = require('../stores/ShoeStore');

// Method to retrieve application state from store
function getAppState() {
    return {
        shoes: ShoeStore.getShoes()
    };
}

// Create our component class
var ShoeStoreApp = React.createClass({displayName: "ShoeStoreApp",

    // Use getAppState method to set initial state
    getInitialState: function() {
        return getAppState();
    },

    // Listen for changes
    componentDidMount: function() {
        ShoeStore.addChangeListener(this._onChange);
    },

    // Unbind change listener
    componentWillUnmount: function() {
        ShoesStore.removeChangeListener(this._onChange);
    },

    render: function() {
        return (
            React.createElement(ShoeStore, {shoes: this.state.shoes})
            );
    },

    // Update view state when change event is received
    _onChange: function() {
        this.setState(getAppState());
    }

});

module.exports = ShoeStoreApp;