import React from 'react';
import $ from 'jquery';

import {displaySongs} from '../actions/song-action.js';

const Song = React.createClass({
  componentDidMount: function() {
    $.ajax({
      url: 'api/songs/',
      success: function(songs) {
        displaySongs(songs);
      }
    })
  },
  render: function(){
    return (
      <div className="mainContainer">
        <h1>Song List</h1>
        <div className="songContainer">
            {this.props.songs.map(function(val, idx) {
              console.log('VAL:', val.artist.name)
              return (
                <div key={idx} className="individualSong">
                  <h2>{val.title}</h2>
                  <h3>by {val.artist.name}</h3>
                  <iframe id="ytplayer" type="text/html" width="auto" height="300"
                  src={`${val.youtube_url.replace('watch?v=', 'embed/')}?origin=http://localhost:9999.com`}></iframe>
                </div>
              )
            })}
        </div>
      </div>
    )
  }
})

export default Song;
