export default (state = {playlistSongs: [], loading:false}, action) => {
    switch(action.type){
        case "LOADING_PLAYLIST_SONG":
            return {
                ...state, 
                loading: true
            }
        case "ADD_PLAYLIST_SONG":
            return {
                ...state, 
                songs: [...state, action.payload]
            }
        default:
            return state 
    }     
}