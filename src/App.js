import React, { Component } from 'react';
import Navbar from './Components/Navbar.js'
import VideoPlayer from './Components/VideoPlayer.js'
import SuggestedVideoPlaceHolder from './Components/SuggestedVideoPlaceHolder.js'
import SavedVideoPlaceHolder from './Components/SavedVideoPlaceHolder.js'
import Footer from './Components/Footer.js'



class App extends Component {
    render() {
      return (
      <div>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <VideoPlayer />
              <br />
              <h2> Saved Videos </h2>
              <hr />
              <div class="row">
                <SavedVideoPlaceHolder />
                <SavedVideoPlaceHolder />
                <SavedVideoPlaceHolder />
              </div>
            </div>
            <div className="col-md-4">
              <SuggestedVideoPlaceHolder />
              <br />
              <SuggestedVideoPlaceHolder />
              <br />
              <SuggestedVideoPlaceHolder />
              <br />
              <SuggestedVideoPlaceHolder />
              <br />
              <SuggestedVideoPlaceHolder />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
