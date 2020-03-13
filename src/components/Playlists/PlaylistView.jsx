import React from 'react'
import Search from '../../containers/Search'
// // import '../playlistview.styles.css'
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

const PlaylistView = (props) => {
    const playlist = props.location.state.playlist
          return(
            <div>
                <h1>{playlist.name}</h1>


                <h3>Add a Song to this Playlist</h3>
                <Search key={playlist.id}/>
            </div>
         )
    
}




export default PlaylistView