//https://scotch.io/tutorials/learning-react-getting-started-and-concepts

var MyComponent = React.createClass({displayName: "MyComponent",
    getInitialState: function(){
      return {
            count: 5
        }
    },
    render: function(){
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "Hello, ", this.props.name, "!"), 
                React.createElement("div", null, "set in getInitialState, ", this.state.count, "!")
            )
        );
    }
});

React.render(
    React.createElement(MyComponent, {name: "bella"}),
    document.getElementById('mount-point')
)



var Counter = React.createClass({displayName: "Counter",
    incrementCount: function(){
        this.setState({
            count: this.state.count + 1
        });
    },
    getInitialState: function(){
        return {
            count: 0
        }
    },
    render: function(){
        return (
            React.createElement("div", {class: "my-component"}, 
                React.createElement("h1", null, "Count: ", this.state.count), 
                React.createElement("button", {type: "button", onClick: this.incrementCount}, "Increment")
            )
            );
    }
});

React.render(React.createElement(Counter, null), document.getElementById('mount-point'));