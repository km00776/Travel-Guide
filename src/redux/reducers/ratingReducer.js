import {ActionTypes} from '../constants/action-types';

const initialState = {
  rating: ' '
};

export const ratingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_RATING:
      return {...state, rating: action.payload};
    default:
      return state;
  }
};
