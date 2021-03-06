import React from 'react'
// import '../search.styles.css'

class Search extends React.Component {
    state = {
        id: "",
        trackId: "",
        musicTrack: "",
        musicArtist: "", 
        searchResults: [],
        showResults: false, 
        addToPlaylist:false
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit = e => {
        e.preventDefault()
        let search_value =  (this.state.musicArtist) || (this.state.musicTrack)
        // debugger
        console.log(e.target)
        fetch(`https://itunes.apple.com/search?term=${search_value}&entity=${e.target.name}`)
        .then(response => response.json())

        .then(songs => {
            // debugger
            // console.log(songs.results)
            this.setState({
                searchResults: songs.results
            })
        })

        this.setState({
            showResults: true

        })
    }

    handleClick = id => {
        this.setState({
            id: "",
            trackId: id,
            showResults: true
        })
    this.props.addSong(songObj)
    this.props.addTheSongToPlaylist(songObj)
    }
    render () {

        //if show_results true then const result_list = map through songs and make objects 
        // if (this.state.showResults) 
             const {searchResults} = this.state; 
             debugger
        
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <h3>Search by Artist Name</h3>
                    <input type="text" name="musicArtist" value={this.state.musicArtist} onChange={this.handleChange} placeholder="Cher" />
                    <button type="submit">Search</button> 
                    <h3>Search by Song Name</h3>
                    <input type="text" name="musicTrack" value={this.state.musicTrack} onChange={this.handleChange} placeholder="Thriller" />
                    <button type="submit">Search</button> 
                </form>
               <br></br>


        
               {/* Should be a component? */}
        
               <div>
                   {searchResults.map(result =>
                    <div data-id={result.trackId}>
                        
                        <a id={result.trackId} href="#">{result.trackName}</a> 
                        <button id={result.trackId} onClick={this.handleClick}>Add</button>                   
                    </div>
                    )}
               </div>
            </div>
        )
    }      
}
    
export default Search