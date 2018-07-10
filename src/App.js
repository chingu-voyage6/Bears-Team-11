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
                <div className="row">
                  <div class="col-xs-6">
                    <p className="views">0 views</p>
                  </div>
                  <div className="col-xs-6">
                    <button className="btn-primary pull-right" ><img src="download-btn.png" /> <span className="save-btn">Save Video</span></button>
                  </div>
                </div>
  
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
              <h2>Recommended Videos</h2>
              <hr />
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
