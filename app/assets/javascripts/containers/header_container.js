'use strict';
import { connect } from 'react-redux';
import Header from '../components/header';
import { toogleMainMenu } from '../actions/pages';

function mapStateToProps(state) {
  return {
    mainMenuVisible: state.page.mainMenuVisible
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuButtonClick: () => {
      dispatch(toogleMainMenu());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
