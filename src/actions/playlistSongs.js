export const addPlaylistSong = playlistSong => {
    return async dispatch => {
        dispatch({type: "ADD_PLAYLIST_SONG"})
        const resp = await fetch(`http://localhost:3001/playlist_songs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(playlistSong)
        })
        const data = await resp.json()
        dispatch({ type: "ADD_PLAYLIST_SONG", payload: data })
    }
}