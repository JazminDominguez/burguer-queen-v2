import { SELECT_BREAKFAST, SELECT_MEAL } from "../constants/action-types";

const initialState = {
  menu: [],
  meal: undefined
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_BREAKFAST:
      return {
        ...state,
        menu: action.menu,
        meal: action.meal
      };
    case SELECT_MEAL:
      return {
        ...state,
        menu: action.menu,
        meal: action.meal
      };
    default:
      return state;
  }
}

export default rootReducer;
