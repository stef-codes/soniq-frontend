export default (state = {searchResults: [], loading:false}, action) => {
    switch(action.type){
        case "LOADING_SEARCH":
            return {
                ...state, 
                loading: true
            }
        case "SONG_SEARCH_SUCCESS":
            return {
                ...state, 
                searchResults: [...state, action.payload]
            }
        case "ARTIST_SEARCH_SUCCESS":
            return {
                ...state, 
                searchResults: [...state, action.payload]
            }
        default:
            return state 
    }     
}