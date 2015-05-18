/** @jsx React.DOM */

var data = [
    {author: 'Tldr', text: 'This is a comment'}
]

var CommentBox = React.createClass({displayName: "CommentBox",
    render: function() {
        return (
            React.createElement("div", {className: "commentBox"}, 
                React.createElement("h1", null, "Comments"), 
                React.createElement(CommentList, {data: this.props.data}), 
                React.createElement(CommentForm, null)
            )
            )
    }
})

var CommentList = React.createClass({displayName: "CommentList",
    render: function() {
        var commentNodes = this.props.data.map(function(comment, i) {
            return React.createElement(Comment, {key: i, author: comment.author}, comment.text)
        })
        return (
            React.createElement("div", {className: "commentList"}, 
                commentNodes
            )
            )
    }
})

var CommentForm = React.createClass({displayName: "CommentForm",
    render: function() {
        return (
            React.createElement("div", {className: "commentForm"}, 
            "Hello World, I am a comment commentForm"
            )
            )
    }
})

var Comment = React.createClass({displayName: "Comment",
    render: function() {
        return (
            React.createElement("div", {className: "comment"}, 
                React.createElement("h2", {className: "commentAuthor"}, 
                    this.props.author
                ), 
                this.props.children
            )
            )
    }
})

React.renderComponent(
    React.createElement(CommentBox, {data: data}),
    document.getElementById('content')
)