import React, { Component } from 'react';

class VideoPlaceHolder extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-sm">
                    <a href="#">
                        <img className="img-fluid" src="http://placehold.it/500x300" alt="" />
                    </a>
                </div>
                <div className="col-sm">
                    <h5>Title</h5>
                    <p>channel name</p>
                    <p>number of views</p>
                </div>
            </div>
        )
    }
}

export default VideoPlaceHolder;