import {ActionTypes} from '../constants/action-types';

const initialState = {
  places: {},
};

export const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PLACES:
      return {...state, places: action.payload};
    default:
      return state;
  }
};
