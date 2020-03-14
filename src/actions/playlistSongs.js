export const addPlaylistSong = playlistSong => {
    return dispatch => {
        dispatch({type: "ADD_PLAYLIST_SONG"})
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
        })
    }
}