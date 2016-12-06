import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import {Provider} from 'react-redux';
import store from './store';

// css
import './styles/main.css';

// components
import Navbar from './components/Navbar';
import Artist from './components/artist';
import {ArtistContainer} from './containers/artist-container';
import Song from './components/song'
import Playlist from './components/playlists'
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
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={ArtistContainer} />
        <Route path="artist" component={ArtistContainer}></Route>
        <Route path="song" component={Song}></Route>
        <Route path="playlists" component={Playlist}></Route>
        <Route path="createPlaylist" component={CreatePlaylist}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
