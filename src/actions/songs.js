export const getSongs = () => {
    return (dispatch) => {
        dispatch({type:"LOADING_SONGS"})
    }
}

// let artist = "musicArtist"
// let song = "musicTrack"

// export function fetchSongs() {
//     return (dispatch) => {
//       dispatch({ type: 'START_SEARCH_SONGS_REQUEST' });
//       fetch('https://itunes.apple.com/search?term=kanye+west&entity=musicArtist')
//         .then(response => response.json())
//         .then(music => console.log(music))
//     }
// }
            
            // dispatch({ type: 'ADD_ASTRONAUTS', astronauts }));