import React from 'react';
import ReactDOM from 'react-dom';

// components
import Navbar from './components/Navbar'

const App = (props) => (
      <div>
        <Navbar />
      </div>
)


ReactDOM.render(
  <App />,
  document.getElementById('app')
)

export default App;
