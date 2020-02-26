import React, {Component} from 'react'
import TopContact from 'components/sharedComponents/TopContact'
import Header from 'components/sharedComponents/Header'
import Nav from 'components/sharedComponents/Nav'
import Footer from 'components/sharedComponents/Footer'

import {Link} from 'react-router-dom'
import './style.scss'

export default class About extends Component{
    state = {
        username:null,
		password:null
    }

	handleChange = event => {
		this.setState(
			{
				[event.target.name] : event.target.value
			}
		)
	}


	render(){
		return(
			<div className="login">

				<TopContact/>
		    	<Header/>
		    	<Nav/>

		    	<div className="loginMain container">
		    		<div className='loginName'> Login </div>

		    		<div className="loginInput">
		    			<form>
						  <div className="form-group">
						    <label for="username">Username</label>
						    <input type="text" 
						    	className="form-control" 
						    	id="username" 
						    	placeholder="Enter Your Username" 
						    	autocomplete="off"
						    	name="username"
						    	onChange={this.handleChange}
						    	value={this.state.username}/>
						  </div>

						  <div className="form-group">
						    <label for="password">Password</label>
						    <input type="password"
						    	className="form-control" 
						    	id="password" 
						    	placeholder="Enter Your Password" 
						    	autocomplete="off"
						    	name="password"
						    	onChange={this.handleChange}
						    	value={this.state.password}/>
						  </div>
						 
						  <button type="submit" className="btn btn-primary">Login</button>
						</form>
						<p className="smallLog"> don't have an account yet, create a new one <Link to="/signUp">here</Link></p>

		    		</div>

		    	</div>

		    	<Footer/>

			</div>

		);
	}
}