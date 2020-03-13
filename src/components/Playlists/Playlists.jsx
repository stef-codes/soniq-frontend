import React from 'react'
// import '../playlists.styles.css'
import {getPlaylists} from '../../actions/playlist'
import PlaylistForm from './PlaylistForm'
import { connect } from 'react-redux'

class Playlists extends React.Component {
    componentDidMount(){
        this.props.getPlaylists()
    }
    render() {
        const playlists = this.props.playlists.map((playlist, i) => <li key={i}>{playlist.name}</li>
        )
        return(
            <div>
                <h2>Your playlists</h2>
                <ul>{this.props.loading ? <h3>...loading playlists</h3> : playlists} </ul>
                <PlaylistForm/>
        
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
    
export default connect (mapStateToProps, {getPlaylists}) (Playlists)