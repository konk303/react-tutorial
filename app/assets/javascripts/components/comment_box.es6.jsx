class CommentBox extends React.Component {
  constructor() {
    super();
    this.state = {data: []};
  }
  loadCommentsFromServer() {
    console.log(this, 'hoi');
    $.ajax({url: this.props.url,
            dataType: 'json',
            cache: false,
            success: (data) => this.setState(data),
            error: (xhr, status, err) => console.error(this.props.url, status, err.toString())
    });
  }
  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(() => this.loadCommentsFromServer(), this.props.pollInterval);
  }
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <CommentBox url="/comments" pollInterval={2000} />,
    /* <CommentBox data={data} />, */
    /* $('#content')[0]*/
    document.getElementById('content')
  );
});
