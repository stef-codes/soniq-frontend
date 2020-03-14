export default (state = {searchResults: [], loading:false}, action) => {
    switch(action.type){
        case "LOADING_SEARCH":
            return {
                ...state, 
                loading: true
            }
        case "SEARCH_SUCCESS":
            return {
                ...state, 
                songs: [...state, action.payload]
            }
        default:
            return state 
    }     
}