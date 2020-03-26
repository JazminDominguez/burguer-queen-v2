import axios from "axios";
import { SELECT_BREAKFAST, SELECT_MEAL } from "../constants/action-types";

export function fetchBreakfast(){
    return(dispatch)=>{
        return axios.get("./menu.json")
        .then(res => {
            dispatch(selectBreakfast(res.data.data.breakfast));
            console.log(res.data.data.breakfast);     
        })
    }
}

export function selectBreakfast(menu){
    return { 
        type: SELECT_BREAKFAST, 
        menu: menu
    }
}

export function fetchMeal(){
    return(dispatch)=>{
        return axios.get("./menu.json")
        .then(res => {
            dispatch(selectMeal(res.data.data.meal));
            console.log(res.data.data.meal);     
        })
    }
}

export function selectMeal(menu){
    return { 
        type: SELECT_MEAL, 
        menu: menu
    }
}