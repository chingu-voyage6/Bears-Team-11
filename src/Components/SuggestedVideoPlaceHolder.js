import React, { Component } from 'react';

class SuggestedVideoPlaceHolder extends Component{
    render(){
        return(
            <div className="row">
                <div class="col-xs-6">
                    <a href="#" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail" src="http://placehold.it/400x300" alt="" />
                    </a>
                </div>
                <div>
                    <h5>Title</h5>
                    <p className="channel-name">channel name</p>
                    <p className="views">0 views</p>
                </div>
            </div>
        )
    }
}

export default SuggestedVideoPlaceHolder;