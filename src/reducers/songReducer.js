export default (state = {songs: [], loading:false}, action) => {
    switch(action.type){
        case "LOADING_SONGS":
            return {
                ...state, 
                loading: true
            }
        default:
            return state 
    }     
}