export default (state = {song:[], playlistSong: [], loading:false}, action) => {
    switch(action.type){
        case "LOADING_PLAYLIST_SONG":
            return {
                ...state, 
                loading: true
            }
        case "CREATE_SONG":
            return {
                ...state, 
                song: [...state, action.payload]
            }
        case "ADD_PLAYLIST_SONG":
            return {
                ...state, 
                playlistSong: [...state, action.payload]
            }
        default:
            return state 
    }     
}