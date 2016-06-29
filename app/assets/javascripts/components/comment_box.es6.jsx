var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

class CommentBox extends React.Component {
  render () {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
}

$(document).on('ready page:load', function() {
  ReactDOM.render(
    <CommentBox data={data} />,
    /* $('#content')[0]*/
    document.getElementById('content')
  );
});
