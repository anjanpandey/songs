import { combineReducers } from 'redux';

// static listofsongs
// we never expect to change it
const songsReducer = () => {
    return [ 
        {title: 'No Scrubs', duration: '4:05' },
        {title: 'Macarena', duration: '3:50'},
        {title: 'All Start', duration: '4:15' },
        {title: 'I Want it That Way', duration: '3:55'}
    ];
};



const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

// so that other files can get access to it
// key - value pair of reducers
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});