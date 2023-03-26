import { SET_OPEN, SET_INDEX, SET_OPEN_GROUP } from "../actions/lightbox";

const initialState = {
  open: false,
  openGroup: null,
  index: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_OPEN:
      return { ...state, open: action.open };

    case SET_INDEX:
      return { ...state, index: action.index };
    case SET_OPEN_GROUP:
      return { ...state, openGroup: action.group };
    default:
      return state;
  }
};
