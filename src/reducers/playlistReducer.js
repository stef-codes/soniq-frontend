export default (state = {playlists: [], loading:false}, action) => {
    switch(action.type){
        case "LOADING_PLAYLISTS":
            return {
                ...state, 
                loading: true
            }
        case "PLAYLISTS_LOADED":
            return {
                ...state,
                playlists: action.payload,
                loading: false
            }
        case "ADD_PLAYLIST":
            return {
                ...state,
            }
        default:
            return state 
    }     
}