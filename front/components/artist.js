import React from 'react';
import $ from 'jquery';

import {displayArtists} from '../actions/artist-actions';

const Artist = React.createClass({
// START HERE:
// sends an ajax request to our backend
// from here: displayArtists action
  componentDidMount: function() {
    $.ajax({
      url: '/api/artists/',
      type: "GET",
      success: function(artists) {
        console.log(artists);
        // Sends data to our store
        displayArtists(artists);
      }
    })
  },
  render: function () {
    console.log('PROPS:', this.props.artists)
    return (
      <div className="mainContainer">
        <div className="artistContainer">
          <h1 className="pageTitles">Artists</h1>
          <ul>
            {this.props.artists.map(function(val, idx) {
            return <li key={idx}>{val.name}</li>})}
          </ul>
        </div>
      </div>
    )
  }
})

export default Artist;
