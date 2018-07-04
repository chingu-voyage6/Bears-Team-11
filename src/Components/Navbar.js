import React, { Component } from 'react';
import SearchBar from './SearchBar';
class Navbar extends Component{
    render(){
        return(
          <div>
            <nav class="navbar navbar-default"></nav> {/* to deal with top padding issue */}
            <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" rel="home" href="#" title="yungu">yungu</a>
              </div>
              <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav">
                  <li><a href="#">Saved Playlists</a></li>
                </ul>
                <div class="col-sm-3 col-md-3 pull-right">
                  <SearchBar />                  
                </div>
            </div>
          </div>
        </div>
        )
    }
}

export default Navbar;