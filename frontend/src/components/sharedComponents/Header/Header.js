import React, {Component} from 'react'

import {Link} from 'react-router-dom'
import idealListLogo from 'assets/idealListLogo.png'

export default class Header extends Component{
	render(){
		return(
				<div className="header"> 
					<img src={idealListLogo}/>
					<Link to='/'>
						<div className="title">
					        <span className="header1">Idea</span>
					        <span className="header2">List</span>
					        <span style={{fontSize:'20px',marginLeft:'6px'}}>.com</span>
				        </div>
				    </Link>

			        <div className="quote">
				        <span><blockquote><i>
				        "Once you learn to read, you will be forever free"
				         </i></blockquote></span>
			        </div>

			    </div>
		);
	}
}