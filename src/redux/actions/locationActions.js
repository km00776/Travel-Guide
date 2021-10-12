import {ActionTypes} from '../constants/action-types';

export const setLocation = (location) => {
    return {
        type: ActionTypes.SET_LOCATION,
        payload: location,
    }
}