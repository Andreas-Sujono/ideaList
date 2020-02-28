import {createStore, combineReducers} from 'redux'
import postReducer from 'reducers/Post'

const rootReducer = combineReducers({
    postReducer
})

const store = createStore(rootReducer,
    {},window.devToolsExtension && window.devToolsExtension()
);

export default store
