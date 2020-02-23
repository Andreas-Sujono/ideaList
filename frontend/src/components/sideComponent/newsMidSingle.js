import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class NewsMidSingle extends Component{
	constructor(){
		super()

	}

	render(){
		return(
			<div className="newsMidSingle">

				<div className="newsMidSingleContent">
					<h2> <Link to={{
						pathname:'/newsSingle',state:{content:this.props.content} 
					}}> {this.props.content.title} </Link> </h2>

					<div>
						<img src={this.props.content.img}/>
					</div>

					<span> <i className="fa fa-user"></i> {this.props.content.author}</span>
					<span> <i className="fa fa-calender"></i> {this.props.content.published}</span>

					<p style={{width:'80%',marginTop:'30px'}}>
						{this.props.content.detail.substring(0,200)}....
					</p>
				</div>

			</div>
		);
	}
}