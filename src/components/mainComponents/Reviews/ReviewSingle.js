import React from 'react'

import defaultPhoto from 'assets/profileDefault.jpg'
import './style.scss'

const ReviewSingle = (props) =>{
    const {data} = props
    return(
        <div className="reviewSingle">
            <img className="profilePhoto" src={defaultPhoto} alt="default"/>
            <div className="reviewUserName ">{data.userName}</div>
            <div className="reviewDate ">
                <span>Posted by: </span>
                {data.reviewDate}
            </div>
            
            <div className="reviewSingleContent">
                {data.review}
            </div>

            <div className="reviewsAttribute">
                <i className="far fa-thumbs-up">{data.like}</i>
                <i className="far fa-thumbs-down"></i>
                <span>reply: {data.reply}</span>
            </div>
        </div>
    )
}

export default ReviewSingle