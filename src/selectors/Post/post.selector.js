//import { createSelector } from 'reselect'

import {postVariable} from 'constants/Post/post.constant'

const reducerName = "postReducer"

export const selectAllPostData = state => state[reducerName].generalReducer['postData']

// select top 3 post data
export const selectTopPostData = (state,topNumber = 3) => {
    return state[reducerName].generalReducer['postData'].slice(0,topNumber)
}

export const selectPostDataByPage = (state,page=1,postPerPage = postVariable.postPerPage) => {
    page = parseInt(page)
    const allData = state[reducerName].generalReducer['postData']
    const maxPage = Math.ceil(allData.length/postPerPage)

    if(page < 1)
        return allData.slice(0,postPerPage)
    if(page > maxPage)
        page = maxPage

    return allData.slice(postPerPage*(page-1), postPerPage*page )
}

export const selectPostDataById = (state,id) =>{
    return state[reducerName].generalReducer['postData'].filter( item => item.id == id)[0]
}
    

