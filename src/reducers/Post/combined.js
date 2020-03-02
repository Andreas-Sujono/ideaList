import { combineReducers } from 'redux';
import generalReducer from './reducers/general.reducer'

const postReducer = combineReducers({
    generalReducer
})

export default postReducer

