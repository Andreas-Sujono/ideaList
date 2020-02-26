import React from 'react'
import {Link} from 'react-router-dom'

import idealListLogo from 'assets/ideaListLogo.png'
import './style.scss'

const Header = () => {
	return(
		<div className="header"> 
			<div className="headerLogo">
				<Link to='/'>
					<img src={idealListLogo} alt="Company Logo"/>
					<div className="headerTitle">
						<span className="headerTitle1">Idea</span>
						<span className="headerTitle2">List</span>
						<span style={{fontSize:'20px',marginLeft:'6px'}}>.com</span>
					</div>
				</Link>
			</div>
			
			<div className="quote">
				<blockquote>"Once you learn to read, you will be forever free"</blockquote>
			</div>

		</div>
	)
}

export default Header