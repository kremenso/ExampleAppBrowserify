'use strict';
import { Component } from 'react';
import HeaderContainer from '../containers/header_container';

class HomeIndex extends Component {
  render() {
    return (
      <div>
        <HeaderContainer type='home_index' />
        Place for another container
      </div>
    );
  }
}

export default HomeIndex;
