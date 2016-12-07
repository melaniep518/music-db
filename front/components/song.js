import React from 'react';
import $ from 'jquery'

const Song = React.createClass({
  componentDidMount: function() {
    $.ajax({
      url: 'api/songs/',
      success: function(songs) {
        console.log(songs)
      }
    })
  },
  render: function(){
    return (
      <div className="mainContainer">
        {/* <h1>Song List</h1> */}
        <div className="songContainer">

          <div className="individualSong">
            <h2>Song Title</h2>
            <h2>Artist</h2>
            <h2>Youtube</h2>
            {/* <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={`${this.props.song.youtube_url.replace('watch?v=', 'embed/')}?origin=http://localhost:9999.com`}></iframe> */}
          </div>
          <div className="individualSong">
            <h2>Song Title</h2>
            <h2>Artist</h2>
            <h2>Youtube</h2>
            {/* <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={`${this.props.song.youtube_url.replace('watch?v=', 'embed/')}?origin=http://localhost:9999.com`}></iframe> */}
          </div>
          <div className="individualSong">
            <h2>Song Title</h2>
            <h2>Artist</h2>
            <h2>Youtube</h2>
            {/* <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={`${this.props.song.youtube_url.replace('watch?v=', 'embed/')}?origin=http://localhost:9999.com`}></iframe> */}
          </div>
          <div className="individualSong">
            <h2>Song Title</h2>
            <h2>Artist</h2>
            <h2>Youtube</h2>
            {/* <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={`${this.props.song.youtube_url.replace('watch?v=', 'embed/')}?origin=http://localhost:9999.com`}></iframe> */}
          </div>
          <div className="individualSong">
            <h2>Song Title</h2>
            <h2>Artist</h2>
            <h2>Youtube</h2>
            {/* <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={`${this.props.song.youtube_url.replace('watch?v=', 'embed/')}?origin=http://localhost:9999.com`}></iframe> */}
          </div>
          <div className="individualSong">
            <h2>Song Title</h2>
            <h2>Artist</h2>
            <h2>Youtube</h2>
            {/* <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={`${this.props.song.youtube_url.replace('watch?v=', 'embed/')}?origin=http://localhost:9999.com`}></iframe> */}
          </div>
        </div>
      </div>
    )
  }
})

export default Song;
