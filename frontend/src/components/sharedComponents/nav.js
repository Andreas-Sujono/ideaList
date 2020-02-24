import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Link as ScrollTo, animateScroll as scroll } from "react-scroll";

export default class Nav extends Component{
	constructor(){
		super()
		this.state= {login:false}

	}

	render(){
		return(
			<div className="nav container">
				<ul className="bigNav">
					<li> <Link to='/'> Home </Link> </li>
					<li> Categories </li>
					<li> <Link to='/about'> About</Link> </li>
					<li> <ScrollTo 
						    to="footer"
						    smooth={true}
						    offset={-70}
						    duration= {800}>

						    Contact 
						    
						</ScrollTo></li>
					
					{
						this.state.login ? 

						<div class="btn-group login">
						  <button type="button" class="btn btn-primary" data-toggle="dropdown">User: Andreas Sujono</button>
						
						  <div class="dropdown-menu">
						    <Link class="dropdown-item" to='/myProfile'>My Profile</Link>
						    <Link class="dropdown-item" to ='/myNews'> My News </Link>
						    <Link class="dropdown-item" to ='/newPost'> Create New Post </Link>
						    <div class="dropdown-divider"></div>
						    <a class="dropdown-item" href="#">Log out</a>
						  </div>
						</div>

							: 
							<li className="login" style={{marginTop:'10px'}}> <Link to='/login'>Login/sign up </Link> </li> 
					}

				</ul>	

				<button class="navbar-toggler buttonNav" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				    <span > <i className="fa fa-bars bars " ></i> </span>
				</button>
				

				 <div class="collapse navbar-collapse " id="navbarNav">
				    <ul class="navbar-nav mobileNav">
				      <li class="nav-item active">
				        <Link to='/'> Home </Link> 
				      </li>
				      <li class="nav-item">
				        Categories
				      </li>
				      <li class="nav-item">
				        <Link to='/about'> About</Link> 
				      </li>
				      <li class="nav-item">
				        <li> <ScrollTo 
						    to="footer"
						    smooth={true}
						    offset={-70}
						    duration= {800}>

						    Contact </ScrollTo></li>
				      </li>
				        {
						this.state.login ? 
							<div className="dropdown user login">
							  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    user: Andreas Sujono
							  </button>
							  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							    <Link class="dropdown-item" to='/myProfile'>My Profile</Link>
					   	 		<Link class="dropdown-item" to ='/myNews'> My News </Link>
					   	 		<Link class="dropdown-item" to ='/newPost'> Create New Post </Link>
							    <a className="dropdown-item" href="#">Log Out</a>
							  </div>
							</div>

							: 
							<li className="login"> <Link to='/login'>Login/sign up </Link> </li> 
						}

				    </ul>
				  </div>
			</div>
		);
	}
}