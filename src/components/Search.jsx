import React from 'react'
import { connect } from 'react-redux'
import {addSong} from '../actions/songs'
// import '../search.styles.css'

class Search extends React.Component {
    state = {
        musicTrack: "",
        musicArtist: "", 
        showResults: false
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit = e => {
        e.preventDefault()
        let search_value =  (this.state.musicArtist) || (this.state.musicTrack)
        debugger
        console.log(e.target)
        fetch(`https://itunes.apple.com/search?term=${search_value}&entity=${e.target.name}`)
        .then(response => response.json())
        .then(song => console.log(song)) 

        this.setState({
            musicTrack: "",
            musicArtist: "", 
            showResults: true
        })

        


    }


    render () {
        return (
            <div>
                <h1>Search for a Song to Add to a Playlist</h1>
                <form onSubmit={this.handleSubmit} >
                    <h3>Search by Artist Name</h3>
                    <input type="text" name="musicArtist" value={this.state.musicArtist} onChange={this.handleChange} placeholder="Kendrick Lamar" />
                    <br/><br/>
                    <button type="submit">Search</button> 
                    <h3>Search by Song Name</h3>
                    <input type="text" name="musicTrack" value={this.state.musicTrack} onChange={this.handleChange} placeholder="Backseat Freestyle" />
                    <button type="submit">Search</button> 
                </form>
            </div>
        )
    }
}
    
export default connect (null, {addSong}) (Search)