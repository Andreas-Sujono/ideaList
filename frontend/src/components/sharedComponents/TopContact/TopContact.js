import React, {Component} from 'react'

export default class TopContact extends Component{
	constructor(){
		super()

	}

	render(){
		return(
			<div className="top">

				<div className="contact ">
					
					<div className= "socialMedia">
						<span className="contactTitle"> contact </span>
						<i className="fa fa-facebook-square"></i>
						<i className="fa fa-twitter"></i>
						<i className="fa fa-instagram"></i>
						<i className="fa fa-phone hide"></i>
						<i className="fa fa-envelope hide"></i>
					</div>

					<div className="contact-right">
						<span className="phoneNumber"> +65 83066172 </span>
						<span className="email"> andreassujono@gmail.com </span>
					</div>

				</div>
				
			</div>
		);
	}
}