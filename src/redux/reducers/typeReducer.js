import {ActionTypes} from '../constants/action-types';

const initialState = {
  type: 'restaurant',
};

export const typeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_TYPE:
      return {...state, type: action.payload};
    default:
      return state;
  }
};
