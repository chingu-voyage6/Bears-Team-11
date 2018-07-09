import React, { Component } from 'react';

class VideoPlayer extends Component{
    render(){
        return(
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/kjBOesZCoqc" allowfullscreen></iframe>
            </div>
        )
    }
}

export default VideoPlayer;