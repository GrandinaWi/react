import {combineReducers} from "redux";
import pizzas from "./pizzas";
import filters from "./filters";
import count from './count';
const rootReducer=combineReducers({
    pizzas,
    filters,
    count,
})

export default rootReducer;