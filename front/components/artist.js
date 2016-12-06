import React from 'react';
import $ from 'jquery';

const Artist = React.createClass({
  // getInitialState: function () {
  //   return {
  //
  //   }
  // },
  componentDidMount: function () {
    $.ajax({
      url: 'api/artists/',
      success: function(data) {
        console.log(data[0].name)
      }
    })
  },
  render: function (){
    return (
      <div className="mainContainer">
        <div className="artistContainer">
            <h1>Artist names will go here</h1>
            <h1>Artist names will go here</h1>
        </div>
      </div>
    )
  }
})

export default Artist;
