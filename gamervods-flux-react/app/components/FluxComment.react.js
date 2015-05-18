var React = require('react');

// Flux Comment view
var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function (comment, index) {
            return (
                <Comment author={comment.author} key={index}>
                {comment.text}
                </Comment>
                );
        });
        return (
            <ul className="commentList">
                {commentNodes}
            </ul>
            );
    }
});

var CommentForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var author = React.findDOMNode(this.refs.author).value.trim();
        var text = React.findDOMNode(this.refs.text).value.trim();
        if (!text || !author) {
            return;
        }
        // send request to the server
        this.props.onCommentSubmit({author: author, text: text});

        // clear forms
        React.findDOMNode(this.refs.author).value = '';
        React.findDOMNode(this.refs.text).value = '';
    },
    render: function() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit} type="name" >
                <textarea ref="text"></textarea>
                <label>by: </label>
                <input type="text" ref="author" />
                <button type="submit" value="Submit" className="btn waves-effect waves-light">
                    Submit<i className="mdi-content-send right"></i>
                </button>
            </form>
            );
    }
});

var Comment = React.createClass({
    render: function() {
        return (
            <li className="comment">
                <blockquote>
                {this.props.children.toString()}
                <cite className="clearfix">—{this.props.author} </cite>
                </blockquote>
            </li>

           )
    }
});

var CommentBox = React.createClass({
    loadCommentsFromServer: function(){
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    handleCommentSubmit: function(comment){
        // optimistically add this comment to the list to make the app feel faster.
        var comments = this.state.data;
        var newComments = comments.concat([comment]);
        this.setState({data: newComments});
        // to do: submit to the server and refresh the list in Flux architecture
    },
    getInitialState: function(){
        return {data: []};
    },
    componentDidMount: function() {
        this.loadCommentsFromServer();
    },
    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
            </div>
            );
    }
});

module.exports = CommentBox;