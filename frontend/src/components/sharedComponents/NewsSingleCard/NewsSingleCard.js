import React from 'react'
import {Link} from 'react-router-dom'

import './style.scss'

const NewsSingleCard = props => {
	const {id,title,img,author,published_date,description} = props.content
	return(
		<div className="newsSingleCard">
			<div className="newsSingleCardContent">
				<h2 className="newsSingleCardTitle"> 
					<Link to={`/post/${id}`}>{title}</Link>
				</h2>

				<div className="newsSingleCardImage">
					<img src={img}/>
				</div>

				<div className="newsSingleCardAttribute">
					<span> <i className="fas fa-user"></i> {author}</span>
					<span> <i className="fas fa-calendar-week"></i> {published_date}</span>
				</div>
				
				<div className="newsSingleCardDescription">
					{description.substring(0,200)}....
				</div>
			</div>
		</div>
	);
}

export default NewsSingleCard