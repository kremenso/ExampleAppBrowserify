'use strict';
import { Component } from 'react'
import AppContainer from '../containers/app_container'

export default class App extends Component {
 render() {
    return (
      <AppContainer className='valign-wrapper'>
        {this.props.children}
      </AppContainer>
    )
  }
}
