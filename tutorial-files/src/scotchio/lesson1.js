//https://scotch.io/tutorials/learning-react-getting-started-and-concepts

/*
 Every component has a state object and a props object.
 State is set using the setState method.
 Calling setState triggers UI updates and is the bread and butter of React’s interactivity.
 If we want to set an initial state before any interaction occurs we can use the getInitialState method.
 Below, see how we can set our component’s state:
 */
var MyComponent = React.createClass({
    getInitialState: function(){
      return {
            count: 5
        }
    },
    render: function(){
        return (
            <div className="initial-component">
                <h1>Hello, {this.props.name}!</h1>
                <div>set in getInitialState, {this.state.count}!</div>
            </div>
        );
    }
});

React.render(
    <MyComponent name="bella"/>,
    document.getElementById('first-point')
)

/* Built in cross-browser events system
The events are attached as properties of components and can trigger methods.
Lets make our count increment below using events:
*/
var Counter = React.createClass({
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
            <div className="counter">
                <h1>Count: {this.state.count}</h1>
                <button type="button" onClick={this.incrementCount}>Increment</button>
            </div>
            );
    }
});

React.render(<Counter/>, document.getElementById('counter-container'));

/* Unidirectional Data Flow
 In React, application data flows unidirectionally via the state and props objects,
 as opposed to the two-way binding of libraries like Angular.
 This means that, in a multi component hierarchy,
  a common parent component should manage the state and pass it down the chain via props.

 */

var List = React.createClass({
    render: function() {
        console.log('this', this);
        var listNodes = this.props.data.map(function (item) {
            return (
                <li key={item}>{item}</li>
            );
        });
        return (
            <ul>
                {listNodes}
            </ul>
        );
    }
});

var FilteredList = React.createClass({
    filterList: function(event) {
        var updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function(item) {
            return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList});
    },
    getInitialState: function() {
        return {
            initialItems: [
                "Apples",
                "Broccoli",
                "Chicken",
                "Duck",
                "Eggs",
                "Fish",
                "Granola",
                "Hash Browns"
            ],
            items: [
                "Apples",
                "Broccoli",
                "Chicken",
                "Duck",
                "Eggs",
                "Fish",
                "Granola",
                "Hash Browns"
            ]
        }
    },
    componentWilLMount: function() {
    },
    render: function() {
        return (
            <div className="filter-list">
                <input type="text" placeholder="Search" onChange={this.filterList}/>
                <List data={this.state.items}/>
            </div>
        )
    }
});

React.render(<FilteredList/>, document.getElementById('filtered-container'));