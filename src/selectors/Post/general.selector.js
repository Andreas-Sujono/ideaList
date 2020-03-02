import { createSelector } from 'reselect'

import {postVariable} from 'constants/Post/post.constant'

const reducerName = "postReducer"

export const selectMaxPage = state => Math.ceil(state[reducerName].generalReducer['postData'].length/postVariable.postPerPage)


