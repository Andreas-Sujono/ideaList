import { createSelector } from 'reselect'

import {reviewsVariable} from 'constants/Reviews/reviews.constant'

const reducerName = "reviewsReducer"

export const selectReviewsPerLoad = () => reviewsVariable.reviewsPerLoad


