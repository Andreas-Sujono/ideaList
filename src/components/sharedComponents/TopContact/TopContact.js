import React from 'react'
import './style.scss'

const TopContact = () => {
	return(
		<div className="topContact row">
			<div className= "socialMedia col-md-5 col-12">
				<span className="contactTitle"> contact </span>
				<i className="fab fa-facebook"></i>
				<i className="fab fa-twitter"></i>
				<i className="fab fa-instagram"></i>

				<i className="fa fa-phone topContact-mobile"></i> 
				<i className="fa fa-envelope topContact-mobile"></i>
			</div>

			<div className="contactRight col">
				<span className="phoneNumber"> <i className="fa fa-phone"></i> (+65) 83066172 </span>
				<span className="email"> <i className="fa fa-envelope"></i> ideaList_hr@gmail.com</span>
			</div>
		</div>
	);
}

export default TopContact