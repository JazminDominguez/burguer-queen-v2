import axios from "axios";
import {
  SELECT_BREAKFAST,
  SELECT_MEAL,
  ADD_CLIENT_NAME
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
