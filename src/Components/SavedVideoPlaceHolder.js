import React, { Component } from 'react';

class SavedVideoPlaceHolder extends Component {
    render() {
        return (
            // <div className="row">
                <div class="col-lg-4">
                    <a href="#" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail" src="http://placehold.it/400x300" alt="" />
                    </a>
                    <h5>Title</h5>
                    <p>channel name</p>
                    <p>number of views</p>
                </div>
            //  </div>
        )
    }
}

export default SavedVideoPlaceHolder;