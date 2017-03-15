'use strict';

import React, { Component, PropTypes } from 'react';

const CommonComponent = ComposedComponent => class extends Component {
  constructor(props) {
    super(props);
    ComposedComponent.prototype.testMethod = this.testMethod.bind(this)
  }

  testMethod() {
    console.log("Called in master component");
  }

  componentDidMount() {
    console.log("CommonComponent DID MOUNT");
  }

  render() {
    return <ComposedComponent {...this.props} />;
  }
};

export default CommonComponent;
