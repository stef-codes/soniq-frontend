export const getArtistSearch = (searchTerm) => {
    return dispatch => {
        dispatch({type: "LOADING_ARTIST_SEARCH"})
        return fetch(`https://itunes.apple.com/search?term=${searchTerm}&entity=musicArtist`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            dispatch({type: "ARTIST_SEARCH_SUCCESS", payload: data})
        })
    }
}

export const getSongSearch = (searchTerm) => {
    return dispatch => {
        dispatch({type: "LOADING_SONG_SEARCH"})
        return fetch(`https://itunes.apple.com/search?term=${searchTerm}&entity=musicTrack`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            dispatch({type: "SONG_SEARCH_SUCCESS", payload: data})
        })
    }
}