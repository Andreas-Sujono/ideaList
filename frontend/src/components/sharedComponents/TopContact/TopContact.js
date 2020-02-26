import React from 'react'
import './style.scss'

const TopContact = () => {
	return(
		<div className="topContact row">
			<div className= "socialMedia col-md-4 col-12">
				<span className="contactTitle"> contact </span>
				<i className="fab fa-facebook"></i>
				<i className="fab fa-twitter"></i>
				<i className="fab fa-instagram"></i>
			</div>

			<div className="contactRight col">
				<span className="phoneNumber"> <i className="fa fa-phone"></i> (+65) 83066172 </span>
				<span className="email"> <i className="fa fa-envelope"></i> andreassujono@gmail.com </span>
			</div>
		</div>
	);
}

export default TopContact