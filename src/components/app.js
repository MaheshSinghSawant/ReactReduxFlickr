import React, { Component } from 'react';
import SearchBar from '../containers/searchbar';
import ImageGrid from '../containers/image-grid';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <br />
        <ImageGrid />
      </div>
    );
  }
}
