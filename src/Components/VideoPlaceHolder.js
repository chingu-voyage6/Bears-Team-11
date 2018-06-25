import React, { Component } from 'react';

class VideoPlaceHolder extends Component{
    render(){
        return(
            <div className="col-md-3 col-sm-6 mb-4">
                <a href="#">
                  <img className="img-fluid" src="http://placehold.it/500x300" alt="" />
                </a>
            </div>
        )
    }
}

export default VideoPlaceHolder;