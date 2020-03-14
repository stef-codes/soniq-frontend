export const getSearch = (musicArtist, musicTrack) => {
    return dispatch => {
        dispatch({type: "LOADING_SEARCH"})
        return fetch(`https://itunes.apple.com/search?term=${musicArtist}&entity=${musicTrack}`)
        .then(resp => resp.json())
        .then(data => {
            dispatch({type: "SEARCH_SUCCESS", payload: data})
        })
    }
}