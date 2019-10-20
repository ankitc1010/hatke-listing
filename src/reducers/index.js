import { combineReducers } from "redux";

import coins from "./coins";
import favourites from "./favourites";
import filter from "./filter";

export default combineReducers({ coins, favourites, filter });
