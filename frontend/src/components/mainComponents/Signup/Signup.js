import React, {Component} from 'react'
import TopContact from 'components/sharedComponents/TopContact'
import Header from 'components/sharedComponents/Header'
import Nav from 'components/sharedComponents/Nav'
import Footer from 'components/sharedComponents/Footer'

import {Link} from 'react-router-dom'
import './style.scss'

export default class SignUp extends Component{
    state = {
        name:null,
        email:null,
        username:null,
        password:null,
        confirmPassword:null,
    }

	handleChangeInput = event =>{
		let name = event.target.name
		this.setState(
			{
				[name] : event.target.value,
			}
		)
	}

	render(){
		return(
			<div className="signUp">

				<TopContact/>
		    	<Header/>
		    	<Nav/>

		    	<div className="signUpMain container">
		    		<div className='signUpName'> Sign Up </div>

		    		<div className="signUpInput">
		    			<form>
		    			  <div className="form-group">
						    <label for="name">Full Name</label>
						    <input type="text" 
						    	className="form-control" 
						    	id="name" 
						    	placeholder="Enter Your Name" 
						    	autoComplete="off"
						    	name="name"
						    	onChange={this.handleChangeInput}
						    	value={this.state.name}/>
						  </div>

						  <div className="form-group">
						    <label for="email">Email</label>
						    <input type="email" 
						    	className="form-control" 
						    	id="email" 
						    	placeholder="Enter Your Email" 
						    	autoComplete="off" 
						    	name="email"
						    	onChange={this.handleChangeInput}
						    	value={this.state.email}/>
						  </div>

						  <div className="form-group">
						    <label for="username">Username</label>
						    <input type="text" 
						    	className="form-control" 
						    	id="username" 
						    	placeholder="Enter Your Username" 
						    	autoComplete="off" 
						    	name="username"
						    	onChange={this.handleChangeInput}
						    	value={this.state.username}/>
						  </div>

						  <div className="form-group">
						    <label for="password">Password</label>
						    <input type="password" 
						    	className="form-control"
						    	id="password" 
						    	placeholder="Enter Your Password" 
						    	autoComplete="off" 
						    	name="password"
						    	onChange={this.handleChangeInput}
						    	value={this.state.password}/>
						  </div>

						  <div className="form-group">
						    <label for="confirmPassword">Confirm Password</label>
						    <input type="password" 
						    	className="form-control" 
						    	id="confirmPassword" 
						    	placeholder="Confirm Password" 
						    	autoComplete="off" 
						    	name="confirmPassword"
						    	onChange={this.handleChangeInput}
						    	value={this.state.confirmPassword}/>
						  </div>
						 
						  <button type="submit" className="btn btn-primary">Sign Up</button>
						</form>
						<p className="smallLog">already have an account, you can just login <Link to="/login">here</Link></p>
						
						
		    		</div>

		    	</div>

		    	<Footer/>

			</div>

		);
	}
}