export const getPlaylists = () => {
    return dispatch => {
        dispatch({type: "LOADING_PLAYLISTS"})
        return fetch('http://localhost:3001/playlists')
        .then(resp => resp.json())
        .then(data => {
            dispatch({type: "PLAYLISTS_LOADED", payload: data})
        })
    }
}

export const addPlaylist = playlist => {
    return dispatch => {
        dispatch({type: "ADD_PLAYLIST"})
        return fetch(`http://localhost:3001/playlists`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(playlist)
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch({type: "ADD_PLAYLIST", payload: data})
        })
    }
}