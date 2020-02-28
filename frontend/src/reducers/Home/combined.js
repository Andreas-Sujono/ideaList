import { combineReducers } from 'redux';
import generalReducer from './reducers/general.reducer'

const homeReducer = combineReducers({
    generalReducer
})

export default homeReducer

