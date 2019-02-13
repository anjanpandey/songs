import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {

    if(!song) {
        return (
            <div className="item">
                <p>Please Select a Song.</p>
            </div>
        );
    }
    return (
            <div>
                <h3 className="item">Details For:</h3>
                <p>Title: {song.title}</p>
                <p>Duration: {song.duration}</p>
            </div>
    );
}

// take our state object
// all data inside redux store
// run some calculation on it
// eventually shows as props inside our component
const mapStateToProps = (state) => {
    //console.log(state);
    return { song: state.selectedSong};
};

// only songlist need it
// connect() returns a function
// second set connect()() invokes function that returns
// connect func calls dispatch func
export default connect(mapStateToProps)(SongDetail);
