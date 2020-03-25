import { ADD_MENU } from "../constants/action-types";

const initialState = {
  menu: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_MENU) {
    return Object.assign({}, state, {
      menu: state.menu.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;