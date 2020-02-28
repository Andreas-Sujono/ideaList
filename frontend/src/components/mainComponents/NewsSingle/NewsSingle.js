import React, {Component} from 'react'
import TopContact from 'components/sharedComponents/TopContact'
import Header from 'components/sharedComponents/Header'
import Nav from 'components/sharedComponents/Nav'
import Footer from 'components/sharedComponents/Footer'

import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectPostDataById} from 'selectors/Post/general.selector'
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

					<div className="newsSingleContentImage">
						<img src={currentData.img} alt={`post id:${this.props.match.params.id}`}/>
					</div>

					<div className="newsSingleContentDescription" style={{marginTop:'30px'}}>
						{currentData.description.split('\n').map(x => <p key={Math.random()}> {x} </p>)}
					</div>

					<div className='back'> <Link to='/'> &lt; back </Link></div>
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