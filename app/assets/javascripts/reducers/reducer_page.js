import { TOGGLE_MAIN_MENU } from '../actions/pages';

const INITIAL_STATE = { mainMenuVisible: true, token: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case TOGGLE_MAIN_MENU:
    return { mainMenuVisible: !state.mainMenuVisible };
  default:
    return state;
  }
}
