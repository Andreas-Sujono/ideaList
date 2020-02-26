import React, {Component} from 'react'
import TopContact from 'components/sharedComponents/TopContact'
import Header from 'components/sharedComponents/Header'
import Nav from 'components/sharedComponents/Nav'
import Footer from 'components/sharedComponents/Footer'

import {Link} from 'react-router-dom'
import data from './utils'
import './style.scss'

export default class NewsSingle extends Component{
	render(){
		const postId = this.props.match.params.id
		let currentData = {}
		for(var i = 0;i < data.length;i++){
			if(data[i].id == postId){
				currentData = data[i]
				break
			}	
		}
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
						<img src={currentData.img}/>
					</div>

					<p className="newsSingleContentDescription" style={{marginTop:'30px'}}>
						{currentData.description.split('\n').map(x => <p> {x} </p>)}
					</p>

					<div className='back'> <Link to='/'> &lt; back </Link></div>
		    	</div> 
		    	<Footer/>
			</div>
		);
	}
}