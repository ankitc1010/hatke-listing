import { TOGGLE_FAVOURITES } from "../actions";

const initialState = {};

const favourites = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITES:
      const newState = { ...state };
      console.log(state[action.payload]);
      if (newState[action.payload] === 1) {
        console.log("came here");
        newState[action.payload] = null;
      } else {
        newState[action.payload] = 1;
      }
      return newState;
    default:
      return state;
  }
};

export default favourites;
