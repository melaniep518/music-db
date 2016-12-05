import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

// css
import './styles/main.css';

// components
import Navbar from './components/Navbar';
import Artist from './components/artist';
import Song from './components/song'
import Playlist from './components/playlist'
import CreatePlaylist from './components/createplaylist'

const App = React.createClass({
  render: function (){
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
})


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Artist} />
      <Route path="artist" component={Artist}></Route>
      <Route path="song" component={Song}></Route>
      <Route path="playlist" component={Playlist}></Route>
      <Route path="createPlaylist" component={CreatePlaylist}></Route>
    </Route>
  </Router>,
  document.getElementById('app')
)

export default App;
