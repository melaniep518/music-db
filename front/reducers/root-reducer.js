// ************************************ IMPORT NODE MODULES ************************************
import {combineReducers} from 'redux';

// ************************************ IMPORT STORE ************************************
import store from '../store.js';

// ************************************ IMPORT REDUCERS ************************************
import {artistReducer} from './artist-reducer.js';
import {playlistsReducer} from './playlists-reducer.js';
<<<<<<< HEAD
import {createPlaylistReducer} from './createPlaylist-reducer.js';
=======
import {songReducer} from './song-reducer.js';
>>>>>>> 17221002673614aeac5422e88d44df4e04e60742
// ************************************ COMBINE REDUCERS ************************************

// combine reducers
// from here: artistReducer
const rootReducer = combineReducers({
  artistReducer,
  playlistsReducer,
<<<<<<< HEAD
  createPlaylistReducer
=======
  songReducer
>>>>>>> 17221002673614aeac5422e88d44df4e04e60742
})

export default rootReducer;
