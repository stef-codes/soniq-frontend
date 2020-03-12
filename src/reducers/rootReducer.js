import {combineReducers} from 'redux'
import  songReducer from './songReducer'
import  playlistReducer from './playlistReducer'

const rootReducer = combineReducers({
    songReducer, 
    playlistReducer
})

export default rootReducer