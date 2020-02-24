import React, {Component} from 'react'
import Top from 'components/sharedComponents/top.js'
import Header from 'components/sharedComponents/header.js'
import Nav from 'components/sharedComponents/nav.js'

import Footer from 'components/sharedComponents/footer.js'

import {Link} from 'react-router-dom'

export default class NewsSingle extends Component{
	componentDidMount(){
		console.log(this.props.location);
	}

	render(){
		let detail = this.props.location.state.content.detail
		return(
			<div className="newsSingle">

				<Top/>
		    	<Header/>
		    	<Nav/>

		    	<div className="newsSingleMain container">

		    		<h2> {this.props.location.state.content.title}</h2>

		    		<span> by <strong>{this.props.location.state.content.author}</strong></span>
					<span> - {this.props.location.state.content.published}</span>

					<div className="share">
						<button className="btn btn-primary"> share on Facebook </button>
						<button className="btn btn-success"> share on twitter </button>

					</div> 

					<div>
						<img src={this.props.location.state.content.img}/>
					</div>

					

					<p className="detail" style={{marginTop:'30px'}}>
						{detail.split('\n').map(x => <p> {x} </p>)}
					</p>


					<div className='back'> <Link to='/'> &lt; back </Link></div>
		    	</div> 



		    
		    	<Footer/>

			</div>

		);
	}
}