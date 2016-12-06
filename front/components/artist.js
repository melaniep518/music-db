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
            <h1>{this.props.artists.map(function(val, idx) {
              return <li key={idx}>{val.name}</li>
            })}</h1>
            <h1>Artist names will go here</h1>
        </div>
      </div>
    )
  }
})

export default Artist;
