import {createStore, combineReducers} from 'redux'
import postReducer from 'reducers/Post'
import reviewsReducer from 'reducers/Reviews'

const rootReducer = combineReducers({
    postReducer,
    reviewsReducer
})

const store = createStore(rootReducer,
    {},window.devToolsExtension && window.devToolsExtension()
);

export default store
