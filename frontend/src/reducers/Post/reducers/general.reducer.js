import {ActionTypes} from 'constants/Post/post.constant'

const initialState = {
    postData : [
        {
            id:1,
            img:"http://d279m997dpfwgl.cloudfront.net/wp/2019/07/AP_19143090374548-e1564788889887-1000x597.jpg",
            title:'Five key Premier League matches to watch in the coming weeks as season kicks off',
            category:'Sports',
            author:'Andreas Sujono',
            authorId:321423,
            published_date:'10/08/2019',
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown \
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries\
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown \
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries\
            \nLorem Ipsum is simply dummy text of the printing and typesetting industry. \
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown \
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries\
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown \
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries\
            \nLorem Ipsum is simply dummy text of the printing and typesetting industry. \
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown \
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries\
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown \
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries\
            "
        },
        {
            id:2,
            img:"https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2019/08/07/fh-worklife-07_2x.jpg?itok=wV6i_lDs&timestamp=1565156884",
            title:'Singapore ranks 32 out of 40 in new index on work-life balance',
            category:'Life',
            author:'Andreas Sujono',
            authorId:321423,
            published_date:'10/08/2019',
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown \
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries\
            \nLorem Ipsum is simply dummy text of the printing and typesetting industry. \
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown \
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries\
            "
        },
        {
            id:3,
            img:"https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2019/08/01/yq-mincedmeatnoodles-01082019.jpg?itok=O61TCwHj&timestamp=1564648937",
            title:'Noodle dishes for calorie counters at Hougang Fishball Minced Meat Noodles',
            category:'Food',
            author:'Andreas Sujono',
            authorId:321423,
            published_date:'10/08/2019',
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown \
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries\
            \nLorem Ipsum is simply dummy text of the printing and typesetting industry. \
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown \
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries\
            "
        },
        {
            id:4,
            img:"https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2019/08/01/yq-mincedmeatnoodles-01082019.jpg?itok=O61TCwHj&timestamp=1564648937",
            title:'Noodle dishes for calorie counters at Hougang Fishball Minced Meat Noodles',
            category:'Food',
            author:'Andreas Sujono',
            authorId:321423,
            published_date:'10/08/2019',
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown \
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries\
            \nLorem Ipsum is simply dummy text of the printing and typesetting industry. \
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown \
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries\
            "
        },
        {
            id:5,
            img:"https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2019/08/07/fh-worklife-07_2x.jpg?itok=wV6i_lDs&timestamp=1565156884",
            title:'Singapore ranks 32 out of 40 in new index on work-life balance',
            category:'Life',
            author:'Andreas Sujono',
            authorId:321423,
            published_date:'10/08/2019',
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown \
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries\
            \nLorem Ipsum is simply dummy text of the printing and typesetting industry. \
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown \
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries\
            "
        },
    ],
    isSignedIn:false,
    isLoading: false
}

const generalReducer = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.GET_POST:
            return state
        default:
            return state
    }
}

export default generalReducer
