'use strict'
import React, { Component, PropTypes } from 'react'
import CommonComponent from './composed/common_component'

class Header extends Component {
  constructor() {
    super();
    this.mainMenu = this.mainMenu.bind(this);
  }

  componentDidMount() {
    this.testMethod();
  }

  mainMenu() {
    const { mainMenuVisible } = this.props;

    return mainMenuVisible ? 'VISIBLE' : 'HIDDEN';
  }

  render() {
    const { onMenuButtonClick } = this.props;

    return (
      <header className='page-topbar'>
        <button onClick={onMenuButtonClick}>ToggleMenu</button>
        Main menu: {this.mainMenu()}
      </header>
    );
  }
}

Header.propTypes = {
  onMenuButtonClick: React.PropTypes.func.isRequired
};

export default CommonComponent(Header);
