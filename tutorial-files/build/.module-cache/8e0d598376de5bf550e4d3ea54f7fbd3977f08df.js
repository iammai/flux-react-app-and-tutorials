/** @jsx React.DOM */ // https://jsfiddle.net/fv6RD/3/ <script src="http://fb.me/react-js-fiddle-integration.js"></script>

var TextBoxList = React.createClass({displayName: "TextBoxList",
    getInitialState: function() {
        return {count: 1};
    },
    add: React.autoBind(function() {
        this.setState({count: this.state.count + 1});
    }),
    render: function() {
        var items = [];
        for (var i = 0; i < this.state.count; i++) {
            items.push(React.createElement("li", null, React.createElement("input", {type: "text", placeholder: "change me!"})));
        }
        return (
            React.createElement("ul", null, 
                items, 
                React.createElement("input", {type: "button", value: "Add an item", onClick: this.add})
            )
            );
    }
});

React.renderComponent(
    React.createElement("div", null, 
        React.createElement("p", null, "Every time you add a new text box to the list, we \"re-render\" the whole list, but any text entered in the text boxes is left untouched because React is smart enough to just append the new text box instead of blowing away the old DOM nodes."), 
        React.createElement(TextBoxList, null)
    ), document.body);