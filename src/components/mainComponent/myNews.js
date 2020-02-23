import React, {Component} from 'react'
import Top from '../sideComponent/top.js'
import Header from '../sideComponent/header.js'
import Nav from '../sideComponent/nav.js'
import NewsTop from '../sideComponent/newsTop.js'
import NewsMid from '../sideComponent/newsMid.js'
import Footer from '../sideComponent/footer.js'

export default class MyNews extends Component{
	constructor(){
		super()
	}

	componentDidMount(){
		
	}

	render(){
		return(
			<div className="myNews">
				<Top/>
		    	<Header/>
		    	<Nav/>

		    	<NewsMid/>
		    	<Footer/>

			</div>

		);
	}
}