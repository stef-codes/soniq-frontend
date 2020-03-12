export const getSongs = () => {
    return (dispatch) => {
        dispatch({type:"LOADING_SONGS"})
    }
}

export const addSong = song => {
    return dispatch => {
        dispatch({type: "ADD_SONG"})
        return fetch(`http://localhost:3001/search`, {
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
    }
}
