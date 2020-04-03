import axios from "axios";
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

export function fetchBreakfast() {
  return dispatch => {
    return axios.get("./menu.json").then(res => {
      dispatch(selectBreakfast(res.data.data.breakfast));
      console.log(res.data.data);
    });
  };
}

export function selectBreakfast(menu) {
  return {
    type: SELECT_BREAKFAST,
    menu: menu,
    meal: "Desayuno"
  };
}

export function fetchMeal() {
  return dispatch => {
    return axios.get("./menu.json").then(res => {
      dispatch(selectMeal(res.data.data.meal));
      console.log(res.data.data.meal);
    });
  };
}

export function selectMeal(menu) {
  return {
    type: SELECT_MEAL,
    menu: menu,
    meal: "Comida"
  };
}

export function addClient(clientName) {
  return {
    type: ADD_CLIENT_NAME,
    clientName: clientName
  };
}

export const addTicketItem = ({
  item = undefined,
  price = 0,
  qty = 0
} = {}) => ({
  type: ADD_TICKET_ITEM,
  product: {
    item,
    price,
    qty
  }
});

/*
// ADD_EXPENSE
export const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

*/
