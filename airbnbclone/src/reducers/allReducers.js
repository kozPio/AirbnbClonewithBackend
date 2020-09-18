import roomReducer from './roomReducer'
import indexReducer from './roomIndexReducer'
import inputReducer from './inputReducer'
import { combineReducers } from 'redux';



const allReducers = combineReducers({
    rooms: roomReducer,
    curentIndex: indexReducer,
    input: inputReducer
});




export default allReducers;