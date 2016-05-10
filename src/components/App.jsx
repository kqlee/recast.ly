class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      videos: [],
      currVid: null
    };
  }

  componentDidMount() {
    this.getVideos('react tutorials');
  }

  changeVideo(video) {
    this.setState({
      currVid: video,
      videos: []
    });
  }

  getVideos(query) {
    var options = {
      key: this.props.API_KEY,
      q: query
    };

    this.props.searchYouTube(options, (videos) => 
      this.setState({
        currVid: videos[0],
        videos: videos
      })
    );
  }

  render() {
    return (
      <div>
        <Nav search={this.getVideos.bind(this)} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currVid}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} click={this.changeVideo.bind(this)}/>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
