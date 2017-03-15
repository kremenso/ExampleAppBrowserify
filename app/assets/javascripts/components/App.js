'use strict';
import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    const { token, getUser } = this.props;

    getUser(token);
  }

  render() {
    return (
      <div className='react-app'>
        Main app Component
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  token: React.PropTypes.string,
  getUser: React.PropTypes.func
}

export default App;
