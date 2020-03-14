import {combineReducers} from 'redux'
import  songReducer from './songReducer'
import  playlistReducer from './playlistReducer'
import  playlistSongReducer from './playlistSongReducer'

const rootReducer = combineReducers({
    songReducer, 
    playlistReducer, 
    playlistSongReducer
})

export default rootReducer