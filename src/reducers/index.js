import {
  SELECT_BREAKFAST,
  SELECT_MEAL,
  ADD_CLIENT_NAME,
  ADD_TICKET_ITEM,
  EDIT_TICKET_ITEM,
  DELETE_TICKET_ITEM,
  SEND_ORDER,
  CLEAN_FOR_NEW_ORDER
} from "../constants/action-types";

const initialState = {
  menu: [],
  meal: undefined,
  clientName: undefined,
  ticket: []
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
    case ADD_TICKET_ITEM:
      return { ...state, ticket: action.product };
    case EDIT_TICKET_ITEM:
      return {};
    case DELETE_TICKET_ITEM:
      return {};
    case SEND_ORDER:
      return {};
    case CLEAN_FOR_NEW_ORDER:
      return {};
    default:
      return state;
  }
}

export default rootReducer;
