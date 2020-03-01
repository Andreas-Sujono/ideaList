import React, { Component } from 'react';
import {connect} from 'react-redux'
import autosize from 'autosize'
import ReviewSingle from './ReviewSingle'
import {selectReviewsBypostId} from 'selectors/Reviews/reviews.selector'
import defaultPhoto from 'assets/profileDefault.jpg'

import './style.scss'

class Reviews extends Component {
    state={
        showButton:false,
        review:'',
    }

    componentDidMount(){
        autosize(this.refs.textarea)
    }
    render() {
        const {reviewsData} = this.props
        return (
            <div className="userReviews">
                <h2>Reviews</h2>
                <div className="addReview">
                    <img className="profilePhoto" src={defaultPhoto} alt="default"/>
                    <textarea 
                        className="addReviewInput"
                        type="text" 
                        placeholder="add public review here...."
                        ref="textarea"
                        rows="1"
                        value={this.state.review}
                        onFocus={()=> this.setState({showButton:true})}
                        onChange={ (e) => this.setState({review:e.target.value})}
                    />
                    <hr/>
                    {
                        this.state.showButton &&
                        <> 
                            <button className="btn btn-light" onClick={()=> {
                                this.setState({showButton:false,review:''});
                            }}>CANCEL</button>
                            <button className="btn btn-primary">COMMENT</button>
                        </>
                    }
                    
                </div>
                {
                    reviewsData.map( (item,idx) => (
                        <ReviewSingle data={item} key={`${item.userId}_${item.reviewId}_${idx}`}/>
                    ))
                }
            </div>
        );
    }
}
const mapStateToProps = (state,props)=>{
    return{
        reviewsData: selectReviewsBypostId(state,props.postId)
    }
}
export default connect(mapStateToProps)(Reviews);