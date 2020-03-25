import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

/*function store(){
    return  createStore(rootReducer);
}
*/

export default store;