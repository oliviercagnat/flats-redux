import React, { Component } from 'react';

import FlatList from '../containers/FlatList';
import Map from '../containers/Map';

class App extends Component {
  render() {
    return (
      <div className="row">
        <FlatList />
        <Map />
      </div>
    );
  }
}

export default App;
