import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {connect} from 'react-redux'; 
import {getSongs} from './actions/songs'
import HomePage from './components/HomePage/HomePage';
import Playlists from './components/Playlists/Playlists';
import PlaylistView from './components/Playlists/PlaylistView';
import Search from './containers/Search'
import Songs from './components/Songs/Songs';


  class App extends React.Component  {
    
    render() {
      return (
      <div>
        <Router>
          <Route exact path={"/"} component={HomePage} />
          <Route exact path={"/playlists"} component={Playlists} />
          <Route exact path={"/playlists/:id"} component={PlaylistView} />
          <Route exact path={"/search"} component={Search} />
          <Route exact path={"/songs"} component={Songs} />
        </Router>
      </div>
      )
    }
  }



const mapStateToProps = state => {
  console.log("Page Loaded", state)
  return {
    songs: state.songReducer.songs, 
    loading: state.songReducer.loading
  }
}

export default connect(mapStateToProps, {getSongs})(App);
