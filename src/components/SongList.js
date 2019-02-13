import React, { Component } from 'react';
import { connect } from 'react-redux';
// curly braces specifically mean we want to import named export from the file
// if not named and importing default, no need of curly braces
import { selectSong } from '../actions';

class SongList extends Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => this.props.selectSong(song)}>
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render() {
        return (
            // this.props === {songs: state.songs}
            <div className="ui divided list">
                {this.renderList()}
            </div>
        );
    }

}

// take our state object
// all data inside redux store
// run some calculation on it
// eventually shows as props inside our component
const mapStateToProps = (state) => {
    //console.log(state);
    return { songs: state.songs};
}

// only songlist need it
// connect() returns a function
// second set connect()() invokes function that returns
// connect func calls dispatch func
export default connect(mapStateToProps, {
    selectSong // selectSong: selectSong
})(SongList);


//function connect() {
  //  return function () {
    //    return 'Hi there!';
   // }
//}
//connect() - by it self it does nothing
//connect()() - prints Hi there!