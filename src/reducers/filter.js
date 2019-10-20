import {
  SET_FILTER_TEXT,
  SET_SORT_BY,
  SET_SORT_TYPE,
  SET_FILTER_TYPE
} from "../actions";

const initialState = {
  filterText: "",
  filterBy: "",
  sortBy: "",
  sortType: 0
};

const sortTypeMapping = {
  0: 1,
  1: -1,
  "-1": 0
};

const filter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_TYPE:
      return { ...state, filterType: action.payload };
    case SET_FILTER_TEXT:
      return { ...state, filterText: action.payload };
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
        sortType: sortTypeMapping[state.sortType]
      };
    case SET_SORT_TYPE:
      return { ...state, sortType: action.payload };
    default:
      return state;
  }
};

export default filter;
