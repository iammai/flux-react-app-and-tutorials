//https://scotch.io/tutorials/learning-react-getting-started-and-concepts

var MyComponent = React.createClass({displayName: "MyComponent",
    getInitialState: function(){
      return {
            count: 5
        }
    },
    render: function(){
        return (
            React.createElement("h1", null, "Hello, ", this.props.name, "!"),
            React.createElement("div", null, "set in getInitialState, ", this.state.count, "!")
        );
    }
});

React.render(
    React.createElement(MyComponent, {name: "bella"}),
    document.getElementById('mount-point')
)

