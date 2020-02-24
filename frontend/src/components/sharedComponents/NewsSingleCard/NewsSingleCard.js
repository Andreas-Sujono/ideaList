import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class NewsSingleCard extends Component{
	render(){
		const {title,img,author,published_date,description} = this.props.content
		return(
			<div className="newsMidSingle">

				<div className="newsMidSingleContent">
					<h2> <Link to={{
						pathname:'/newsSingle',state:{content:this.props.content} 
					}}> {title} </Link> </h2>

					<div>
						<img src={img}/>
					</div>

					<span> <i className="fa fa-user"></i> {author}</span>
					<span> <i className="fa fa-calender"></i> {published_date}</span>

					<p style={{width:'80%',marginTop:'30px'}}>
						{description.substring(0,200)}....
					</p>
				</div>

			</div>
		);
	}
}

export default NewsSingleCard