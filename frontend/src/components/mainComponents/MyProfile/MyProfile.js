import React, {Component} from 'react'
import Top from 'components/sharedComponents/top.js'
import Header from 'components/sharedComponents/header.js'
import Nav from 'components/sharedComponents/nav.js'
import Footer from 'components/sharedComponents/footer.js'

import profileDefault from 'assets/profileDefault.jpg'

export default class MyProfile extends Component{

    state = {
        name:null,
        email:null,
        username:null,
    }

	render(){
		return(
			<div className="myProfile ">
				<Top/>
		    	<Header/>
		    	<Nav/>

		    	<div className="myProfileMain container">
		    		<h2 className="col-md-4 col-10"> My Profile </h2>

		    		<div className="content row">
		    			<img className="col-md-4 col-10" src={profileDefault} />

		    			<div className="col-md-7 col-10">
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

								 
								  <button type="submit" className="btn btn-primary">Update Profile</button>
								</form>

							</div>
						</div>
						
						
		    			</div>

		    	</div>

		    	<Footer/>

			</div>

		);
	}
}