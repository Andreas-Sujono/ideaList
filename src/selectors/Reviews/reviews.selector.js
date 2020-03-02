//import { createSelector } from 'reselect'

import {reviewsVariable} from 'constants/Reviews/reviews.constant'

const reducerName = "reviewsReducer"

export const selectReviewsBypostId = (state,postId) => state[reducerName].generalReducer['reviewsData'].filter(item => item.postId == postId)



    

