import React, { Component } from 'react';
import Navbar from './Components/Navbar.js'
import VideoPlayer from './Components/VideoPlayer.js'
import VideoPlaceHolder from './Components/VideoPlaceHolder.js'
import Footer from './Components/Footer.js'



class App extends Component {
    render() {
      return (
      <div>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <VideoPlayer />
            <div className="col-md-4">
              <VideoPlaceHolder />
              <br />
              <VideoPlaceHolder />
              <br />
              <VideoPlaceHolder />
              <br />
              <VideoPlaceHolder />
              <br />
              <VideoPlaceHolder />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
