export default (state = {songs: [], loading:false}, action) => {
    switch(action.type){
        case "LOADING_SONGS":
            return {
                ...state, 
                loading: true
            }
        case "ADD_SONG":
            return {
                ...state, 
                songs: [...state, action.payload]
            }
        default:
            return state 
    }     
}