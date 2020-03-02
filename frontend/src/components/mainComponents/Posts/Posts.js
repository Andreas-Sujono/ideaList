import React, {Component} from 'react'
import {connect} from 'react-redux'
import {selectPostDataByUserId} from 'selectors/Post/post.selector'

import './style.scss'

class Posts extends Component{
	render(){
		const {postDataByUser} = this.props

		return(
			<div className="posts">
				<h3>Posts</h3>
				<div className="tableContainer">
					<table class="table">
						<thead class="thead-dark">
							<tr>
								<th scope="col">#PostId</th>
								<th scope="col">Post title</th>
								<th scope="col">Post content</th>
								<th scope="col">Post published date</th>
							</tr>
						</thead>
						<tbody>
							{
								postDataByUser.map( (item,idx) => (
									<tr>
										<th scope="row">{item.id}</th>
										<td>{item.title}</td>
										<td>{item.description.substring(0,200)}...</td>
										<td>{item.published_date}</td>
									</tr>
								))
							}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state,props) => { 
    return {
        postDataByUser:selectPostDataByUserId(state,321423),
    };
};

export default  connect(mapStateToProps) (Posts)