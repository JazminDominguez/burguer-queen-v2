import { SELECT_BREAKFAST, SELECT_MEAL } from "../constants/action-types";

const initialState = {
  menu: []
};

function rootReducer(state = initialState, action) {
 /* if (action.type === ADD_MENU) {
    return Object.assign({}, state, {
      menu: state.menu.concat(action.payload)
    });
  }
  return state;
  */
  switch (action.type) {
    case SELECT_BREAKFAST:
       return {
        ...state,
        menu: action.menu
      }
     case SELECT_MEAL:
       return {
        ...state,
        menu: action.menu
      }
    default:
      return state
  }
}
/*
 if(action.type === SELECT_BREAKFAST){
   return {
     ...state,
     menu: action.menu
   }
 } else {
   return {
     ...state
   }
 }
}
*/

export default rootReducer;