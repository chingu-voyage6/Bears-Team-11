import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <form class="navbar-form" role="search">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search Video" name="srch-term" id="srch-term" />
                    <div class="input-group-btn">
                        <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
                    </div>
                </div>
            </form>
        );
    }
}

export default SearchBar;
