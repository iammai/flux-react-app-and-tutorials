/** @jsx React.DOM */
//note the original fiddle uses an older version of react (0.3) so I've changed the code to match current (react 0.13)
// https://jsfiddle.net/fv6RD/3/
/*
 The data returned from render is neither a string nor a DOM node -- it's a lightweight description of what the DOM should look like.
 reconciliation! (DOM diff algorithm(
 Because this re-render is so fast (around 1ms for TodoMVC),
 the developer doesn't need to explicitly specify data bindings.
*/

var TextBoxList = React.createClass({
    getInitialState: function() {
        return {count: 1};
    },
    add: (function() {
        this.setState({count: this.state.count + 1});
    }),
    render: function() {
        var items = [];
        for (var i = 0; i < this.state.count; i++) {
            items.push(<li><input type="text" placeholder="change me!" /></li>);
        }
        return (
            <ul>
                {items}
                <input type="button" value="Add an item" onClick={this.add} />
            </ul>
            );
    }
});

React.render(
    <div>
        <p>Every time you add a new text box to the list, we "re-render" the whole list, but any text entered in the text boxes is left untouched because React is smart enough to just append the new text box instead of blowing away the old DOM nodes.</p>
        <TextBoxList />
    </div>, document.body);