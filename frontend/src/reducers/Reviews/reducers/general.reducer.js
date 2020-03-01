
/*give mock data
{
         reviewId:<id>,
         postId:<id>,
         userName:<string>,
         userId:<id>,
         reviewDate:<date>,
         review:<string>,
         like:<int>,
         reply:<int>,
},
*/
const initialState = {
    reviewsData : [
     {
         reviewId:223231,
         postId:1,
         userName:'John',
         userId:321421,
         reviewDate:'20-Feb-2020',
         review:'what a great news',
         like:6,
         reply:0,
     },
     {
        reviewId:2233421,
        postId:2,
        userName:'John',
        userId:321422,
        reviewDate:'21-Feb-2020',
        review:'Its funny that i can read arabic but i don’t really understand them HAHA',
        like:6,
        reply:0,
    },
    {
        reviewId:31531,
        postId:3,
        userName:'John',
        userId:321423,
        reviewDate:'21-Feb-2020',
        review:'what a great news3',
        like:6,
        reply:0,
    },
    {
        reviewId:2243291,
        postId:1,
        userName:'Emily',
        userId:321424,
        reviewDate:'22-Feb-2020',
        review:'what a great news4',
        like:6,
        reply:0,
    },
    ],
    isSignedIn:false,
    isLoading: false
}

const generalReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default generalReducer
