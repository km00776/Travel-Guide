import {combineReducers} from 'redux';
import {locationReducer } from './locationReducer';
import {placesReducer } from './placeReducer';
import {typeReducer} from './typeReducer';
import {ratingReducer} from './ratingReducer';


const reducers = combineReducers({
    location: locationReducer,
    places : placesReducer,
    type: typeReducer,
    rating: ratingReducer,
});

export default reducers;