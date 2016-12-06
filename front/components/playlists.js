import React from 'react';
import $ from 'jquery';

const Playlist = React.createClass({
  componentDidMount: function (){
    $.ajax({
      url: 'api/playlists',
      success: function (playlists) {
        console.log(playlists)
      }
    })
  },
  render: function (){
    return (
      <div className="mainContainer">
        <div className="artistContainer">
          <h1>Playlists</h1>
          <ul className="listUl">
            <li className="list">Playlist names wil go here</li>
            {/* <li className="list">Playlist names wil go here</li> */}
          </ul>
        </div>
      </div>
    )
  }
})

export default Playlist;
