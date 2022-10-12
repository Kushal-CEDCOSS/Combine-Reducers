import { cakeReducer } from "./CakeReducer";
import { chocolateReducer } from "./ChocolateReducer";
import { icecreamReducer } from "./IcecreamReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ cakeReducer, icecreamReducer, chocolateReducer });

export default rootReducer;