class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      videos: window.exampleVideoData,
      currVid: window.exampleVideoData[0]
    };
  }
  changeVideo(x) {
    this.setState(
      this.state.currVid = x
    );
  }
  render() {
    return (
      <div>
        <Nav />
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
