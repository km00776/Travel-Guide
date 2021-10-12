import {ActionTypes} from '../constants/action-types';


const initialState = {
    location: {}
}


export const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_LOCATION:
            return {...state, location: action.payload}
        default: 
            return state;
    } 
}