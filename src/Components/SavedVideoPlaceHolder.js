import React, { Component } from 'react';

class SavedVideoPlaceHolder extends Component {
    render() {
        return (
                <div class="col-lg-4">
                    <a href="#" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail" src="http://placehold.it/400x300" alt="" />
                    </a>
                    <div className="text-left">
                        <h4>Title</h4>
                        <p className="channel-name">channel name</p>
                        <p className="views">0 views</p>
                    </div>
                </div>
        )
    }
}

export default SavedVideoPlaceHolder;