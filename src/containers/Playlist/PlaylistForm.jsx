import React from 'react'
import {connect} from 'react-redux'
import {addPlaylist} from '../../actions/playlist'
// import '../playlistform.styles.css'

class PlaylistForm extends React.Component {
    state = {
        name: "",
        theme: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        this.props.addPlaylist(this.state)
        
  

        this.setState({
            name: "",
            theme: ""
        })
    }

    render () {
        return (
            <div>
                <h3>Create a Playlist</h3>
                <form onSubmit={this.handleSubmit} >
                    <label>Add Playlist Name</label><br/>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Coding Music" />
                    <br/><br/>
                    <label>Add Playlist Theme</label><br/>
                    <input type="text" name="theme" value={this.state.theme} onChange={this.handleChange} placeholder="Coding" />
                    <br/><br/>
                    <button type="submit">Add Playlist</button> 
                </form>
            </div>
        )
    }      

    
}
    
export default connect (null, {addPlaylist}) (PlaylistForm);