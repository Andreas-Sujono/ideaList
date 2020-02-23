import React, {Component} from 'react'
import Top from '../sideComponent/top.js'
import Header from '../sideComponent/header.js'
import Nav from '../sideComponent/nav.js'
import Footer from '../sideComponent/footer.js'

import photoMe from 'assets/photoMe.jpg'

export default class About extends Component{
	constructor(){
		super()
	}

	render(){
		return(
			<div className="about">

				<Top/>
		    	<Header/>
		    	<Nav/>

		    	<div className="aboutContent container">
		    		<div style={{border:'2px double lightgrey',padding:'20px'}}>
			    		<h3>Founder </h3> 
			    		<img src={photoMe}/>
			    		<div className="name"> Andreas Sujono </div>

			    		<div className="aboutMeDetails">
			    			Hello, my name is Andreas Sujono. I am 19 years old and currently studying in Nanyang Technological University (NTU) Singapore with Electrical and Electronic Engineering Major.
			    			<br/>
							I am really interested in Web programming, both front end and back end development.If you want to know more about me, you can chek out my contact below
			    		</div>
			    	</div>


		    	</div>

		    	<Footer/>

			</div>

		);
	}
}