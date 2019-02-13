// Action creator
export const selectSong = (song) => {
    // return an action
    // we must have type property
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};



