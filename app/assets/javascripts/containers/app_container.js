'use strict';
import { connect } from 'react-redux';
import App from '../components/app';

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (token) => {
      console.log("GET USER")
    }
  };
};

function mapStateToProps(state) {
  return {
    token: state.page.token
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
