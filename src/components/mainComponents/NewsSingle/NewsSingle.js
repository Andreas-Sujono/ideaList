import React, {Component} from 'react'
import TopContact from 'components/sharedComponents/TopContact'
import Header from 'components/sharedComponents/Header'
import Nav from 'components/sharedComponents/Nav'
import Footer from 'components/sharedComponents/Footer'
import Reviews from 'components/mainComponents/Reviews'

import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectPostDataById} from 'selectors/Post/post.selector'
import './style.scss'

class NewsSingle extends Component{
	render(){
		const {currentData} = this.props

		return(
			<div className="newsSingle">
				<TopContact/>
		    	<Header/>
		    	<Nav/>
		    	<div className="newsSingleContent container">
		    		<h2> {currentData.title}</h2>
		    		<span> by <strong>{currentData.author}</strong></span>
					<span> - {currentData.published_date}</span>
					
					<div className="newsSingleContentShare">
						<button className="btn btn-primary"> share on Facebook </button>
						<button className="btn btn-success"> share on twitter </button>
					</div> 

					<img src={currentData.img} className="newsSingleContentImage" alt={`post id:${this.props.match.params.id}`}/>
					
					<div className="newsSingleContentDescription" style={{marginTop:'30px'}}>
						{currentData.description.split('\n').map(x => <p key={Math.random()}> {x} </p>)}
					</div>

					<div className='back'> <Link to='/'> &lt; back </Link></div>

					<Reviews postId={currentData.id}/>
		    	</div> 
		    	<Footer/>
			</div>
		);
	}
}

const mapStateToProps = (state,props) => { 
	const postId = props.match.params.id
    return {
        currentData:selectPostDataById(state,postId)
    };
};

export default connect( mapStateToProps)(NewsSingle)