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
                <div className="col-xs-6">
                    <h5>Title</h5>
                    <p>channel name</p>
                    <p>number of views</p>
                </div>
            </div>
        )
    }
}

export default SuggestedVideoPlaceHolder;