import React, {Component} from 'react'
import Top from '../sideComponent/top.js'
import Header from '../sideComponent/header.js'
import Nav from '../sideComponent/nav.js'
import NewsTop from '../sideComponent/newsTop.js'
import NewsMid from '../sideComponent/newsMid.js'
import Footer from '../sideComponent/footer.js'

export default class Post extends Component{
	constructor(){
		super()
	}

	componentDidMount(){
		
	}

	render(){
		return(
			<div className="post">
				<Top/>
		    	<Header/>
		    	<Nav/>

		    	<div className="postMain container">

		    		<div className="postMainDetail">
			    		<h2> Create New Post </h2>

			    		<form>
				    		<div className="postTitle">
				    			<span>Title</span>
				    			<div className='postTitleInput'>
				    				<input type="text" plceholder="title"/>
				    			</div>
				    		</div>

				    		<div className="postImg">
				    			<span>Image</span>
				    			<div className='postImgInput'>
				    				<input type="file" plceholder="upload an image here" />
				    			</div>
				    		</div>

				    		<div className="postContent">
				    			<span>Content</span>
				    			<div className='postContentInput'>
				    				<textarea />
				    			</div>
				    		</div>

				    		<div className="submit">
				    			<button className="btn btn-primary" style={{width:'100px'}}> post </button>
				    		</div>
				    	</form>
			    	</div>


		    	</div>

		    	<Footer/>

			</div>

		);
	}
}