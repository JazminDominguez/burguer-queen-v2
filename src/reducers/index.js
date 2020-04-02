import {
  SELECT_BREAKFAST,
  SELECT_MEAL,
  ADD_CLIENT_NAME
} from "../constants/action-types";

const initialState = {
  menu: [],
  meal: undefined,
  clientName: undefined
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
    case ADD_CLIENT_NAME:
      return {
        ...state,
        clientName: action.clientName
      };
    default:
      return state;
  }
}

export default rootReducer;
