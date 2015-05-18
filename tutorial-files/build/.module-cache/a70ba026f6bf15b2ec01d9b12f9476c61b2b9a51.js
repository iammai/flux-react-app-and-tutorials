var CommentBox = React.createClass({displayName: "CommentBox",
   render: function() {
       return (
           React.createElement("div", {className: "commentBox"}, 
               "Hello, world! I am a CommentBox.", 
               React.createElement("h1", null, "Comments")
           )
       );
   }
});

React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);


var CommentList = React.createClass({displayName: "CommentList",
    render: function() {
        return (
            React.createElement("div", {className: "commentList"}, 
            "Hello, world! I am a CommentList."
            )
        );
    }
});

var CommentForm = React.createClass({displayName: "CommentForm",
    render: function() {
        return (
            React.createElement("div", {className: "commentForm"}, 
            "Hello, world! I am a CommentForm."
            )
        );
    }
});

var Comment = React.createClass({displayName: "Comment",
    render: function() {
        return (
            React.createElement("div", {className: "comment"}, 
                React.createElement("h2", {className: "commentAuthor"}, 
                this.props.author
                ), 
                marked(this.props.children.toString())
            )
        );
    }
});