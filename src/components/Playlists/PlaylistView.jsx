import React from 'react'
// import '../playlists.styles.css'
import {getPlaylists} from '../../actions/playlist'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class PlaylistView extends React.Component {

    render() {
        const playlists = this.props.playlists.map((playlist) => 
            <div>
             <br/>
            <li key={i}>{playlist.name}</li>
            <Link to="/search">
                <button type="button">
                    Add a Song
                </button>
            </Link>

            </div>
         )
        return(
            <div>
                <h2>Playlist Name</h2>
            {playlists}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("Playlist State", state)
    return {
      playlists: state.playlistReducer.playlists, 
      loading: state.playlistReducer.loading
    }
  }
    
export default connect (mapStateToProps, {getPlaylists}) (PlaylistView)