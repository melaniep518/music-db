import React from 'react';

const CreatePlaylist = React.createClass({
  render: function (){
    return (
      <div className="mainContainer">
        <div className="createPlaylistContainer">
          <h1 className="pageTitles">Create a playlit</h1>
          <form>
            <label for="playlistName">Playlist Name</label>
            <input id="playlistName" type="text" placeholder="Playlist"></input>
            <label for="songTitle">Song Title</label>
            <input id="songTitle" type="text" placeholder="Song title"></input>
            <label for="songArtist">Artist</label>
            <input id="songArtist" type="text" placeholder="Artist name"></input>
            <label for="youtubeLink">Youtube Link</label>
            <input id="youtubeLink" type="text" placeholder="Youtube or Spotify link"></input>
          </form>
        </div>
      </div>
    )
  }
})

export default CreatePlaylist
