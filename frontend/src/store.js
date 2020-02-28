import {createStore, combineReducers} from 'redux'
import homeReducer from 'reducers/Home'

const reducer = combineReducers({
    homeReducer
})
const store = createStore(reducer,{},window.devToolsExtension && window.devToolsExtension());

export default store
