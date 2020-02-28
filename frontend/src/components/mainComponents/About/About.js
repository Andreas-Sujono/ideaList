import React, { Component } from 'react';
import TopContact from 'components/sharedComponents/TopContact'
import Header from 'components/sharedComponents/Header'
import Nav from 'components/sharedComponents/Nav'
import Footer from 'components/sharedComponents/Footer'

import photoAndreas from 'assets/photoAndreas.png'

import './style.scss'

class About extends Component {
    render() {
        return (
            <div className="about">
				<TopContact/>
		    	<Header/>
		    	<Nav/>
		    	<div className="aboutContent container">
			    		<h3>Founder </h3> 
			    		<img src={photoAndreas} alt="Andreas Sujono"/>
			    		<div className="name"> Andreas Sujono </div>

			    		<div className="aboutMeDetails">
						A sophomore in NTU studying Electrical and Electronic Engineering. 
						Have a really great passion for developing innovative programs. 
						Experienced in well-versed technology and writing code that are reliable and user-friendly. 
						Have developed several web-based applications using Python with Django framework and built the front end using ReactJs to make a responsive single page application.
			    		</div>
		    	</div>
		    	<Footer/>
			</div>
        );
    }
}

export default About;