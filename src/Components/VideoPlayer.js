import React, { Component } from 'react';

class VideoPlayer extends Component{
    render(){
        return(
            <div className="col-md-8">
              <iframe width="750" height="500" src="https://www.youtube.com/embed/tgbNymZ7vqY">
              </iframe> 
            </div>
        )
    }
}

export default VideoPlayer;