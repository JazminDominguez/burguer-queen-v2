// Ticket Reducer Reducer
import {
  ADD_TICKET_ITEM,
  EDIT_TICKET_ITEM,
  DELETE_TICKET_ITEM,
  SEND_ORDER,
  CLEAN_FOR_NEW_ORDER,
} from "../constants/action-types";

const ticketReducerDefaultState = [];

export default (state = ticketReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_TICKET_ITEM:
      return [...state, action.product];
    case DELETE_TICKET_ITEM:
      return state.filter(({ id }) => id !== action.id);
    case EDIT_TICKET_ITEM:
      return state.map((ticket) => {
        if (ticket.id === action.id) {
          return {
            ...ticket,
            ...action.updates,
          };
        } else {
          return ticket;
        }
      });
    default:
      return state;
  }
};
