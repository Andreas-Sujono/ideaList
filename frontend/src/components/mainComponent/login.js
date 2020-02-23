import React, {Component} from 'react'
import Top from '../sideComponent/top.js'
import Header from '../sideComponent/header.js'
import Nav from '../sideComponent/nav.js'
import Footer from '../sideComponent/footer.js'

import {Link,Redirect} from 'react-router-dom'

export default class About extends Component{
	constructor(){
		super()

		this.state={
			username:null,
			password:null
		}

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e){
		this.setState(
			{
				[e.target.name] : e.target.value
			}
		)
	}


	render(){
		return(
			<div className="login">

				<Top/>
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