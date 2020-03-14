import React from 'react'
import Search from '../../containers/Search'
 // import '../playlistview.styles.css'
import { connect } from 'react-redux'
import {addSong} from '../../actions/songs'
import {addPlaylistSong} from '../../actions/playlistSongs'
// import { Link } from 'react-router-dom'

class PlaylistView extends React.Component {
        state = {
            playlist_id:this.props.match.params.id, 
            song_id:""
        }

    
        addSongToPlaylist = e => {
            debugger
            e.preventDefault()
            console.log(e.target.id)
            console.log(this.props.match.params.id)

            this.props.addSong({
                song_id: e.target.id
            })

            this.props.addPlaylistSong({
                playlist_id: this.props.match.params.id, 
                song_id: e.target.id
            })
        }


        // handleClick = (e) => {
        //     e.preventDefault()
        //     console.log(e.target.id)
        //     console.log(this.props.match.params.id)
        //     // let playlist = this.props.match.params.id
        //     // let song = e.target.id
        //     this.setState((prevState) => { 
        //         return {
        //             playlist_id: prevState.playlist_id, 
        //             song_id: e.target.id
        //         };
        //     })
        //     console.log(this.state)
        //     // this.props.addPlaylistSong(this.state)
        // }
    render () {
        
        const playlist = this.props.location.state.playlist
     
          return(
            <div>
                <h1>{playlist.name}</h1>


                <h3>Add a Song to this Playlist</h3>
                <Search handleOnClick={this.addSongToPlaylist}/>

            </div>
         )
    
    }

}


export default connect (null, {addSong, addPlaylistSong}) (PlaylistView);