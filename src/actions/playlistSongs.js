export const addPlaylistSong = playlistSong => {
    return dispatch => {

        dispatch({type: "ADD_SONG"})
        return fetch(`http://localhost:3001/songs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(song)
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch({type: "ADD_SONG", payload: data})
        })

        .then(data => {
            (dispatch({type: "ADD_PLAYLIST_SONG"})
        return fetch(`http://localhost:3001/playlist_songs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(playlistSong)
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch({type: "PLAYLIST_SONG_ADDED", payload: data})
        }))
    }
}