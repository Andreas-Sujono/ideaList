import React, {Component} from 'react'
import profileDefault from 'assets/profileDefault.jpg'
import './style.scss'

class MyProfile extends Component{
    state = {
        name:'',
        email:'',
		username:'',
		phoneNumber:'',
		nationality:''
    }

	render(){
		return(
			<div className="myProfile">
				<h3>My Profile</h3> 
				
				<div className="showProfile row">
					<img src={profileDefault} alt="user Profile" className="col"/>
					<div className="showProfileContent col">
						<div className="showProfileFullName"> 
							Andreas Sujono 
						</div>
						<div className="row col">
							<div className="showProfileIndividual col"> 
								<div className="textGray">Email: </div>
								andreassujono@gmail.com 
							</div>
							<div className="showProfileIndividual col">  
								<div className="textGray">Username: </div>
								ANDR0075 
							</div>
						</div>

						<div className="row col">
							<div className="showProfileIndividual col"> 
								<div className="textGray">phoneNumber: </div>
								andreassujono@gmail.com 
							</div>
							<div className="showProfileIndividual col">  
								<div className="textGray">Nationality: </div>
								Indonesian 
							</div>
						</div>
					</div>
				</div>
				

				<div className="myProfileInput">
					<h4>Update Profile</h4>
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
							<label for="phoneNumber">Phone Number: </label>
							<input type="text" 
								className="form-control" 
								id="phoneNumber" 
								placeholder="Enter Your Phone Number" 
								autoComplete="off" 
								name="phoneNumber"
								onChange={this.handleChangeInput}
								value={this.state.phoneNumber}/>
						</div>

						<div className="form-group">
							<label for="nationality">Nationality: </label>
							<input type="text" 
								className="form-control" 
								id="nationality" 
								placeholder="Enter Your Nationality" 
								autoComplete="off" 
								name="nationality"
								onChange={this.handleChangeInput}
								value={this.state.nationality}/>
						</div>

						<button type="submit" className="btn btn-primary">Update Profile</button>
					</form>
				</div>
			</div>

		);
	}
}

export default MyProfile