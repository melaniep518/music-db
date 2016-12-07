import React from 'react';

const CreatePlaylist = React.createClass({
  render: function (){
    return (
      <div className="mainContainer">
        <div>
          <h1 className="pageTitles">Create a playlit</h1>
          <form>
            <label>Playlist Name</label>
            <input type="text"></input>
          </form>
        </div>
      </div>
    )
  }
})

export default CreatePlaylist
