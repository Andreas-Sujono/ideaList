import React, {Component} from 'react'
import InstagramEmbed from 'react-instagram-embed';
import NewsMidSingle from './newsMidSingle.js'

export default class NewsMid extends Component{
	constructor(){
		super()
		this.state= {
			content1:{
				id:1,
				img:"http://d279m997dpfwgl.cloudfront.net/wp/2019/07/AP_19143090374548-e1564788889887-1000x597.jpg",
				title:'Five key Premier League matches to watch in the coming weeks as season kicks off',
				categorie:'Sports',
				author:'Andreas Sujono',
				published:'10/08/2019',
				detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
				Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown \
				printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries\
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
				Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown \
				printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries\
				\nLorem Ipsum is simply dummy text of the printing and typesetting industry. \
				Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown \
				printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries\
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
				Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown \
				printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries\
				\nLorem Ipsum is simply dummy text of the printing and typesetting industry. \
				Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown \
				printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries\
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
				Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown \
				printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries\
				"
			},
			content2:{
				id:2,
				img:"https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2019/08/07/fh-worklife-07_2x.jpg?itok=wV6i_lDs&timestamp=1565156884",
				title:'Singapore ranks 32 out of 40 in new index on work-life balance',
				categorie:'Life',
				author:'Andreas Sujono',
				published:'10/08/2019',
				detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
				Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown \
				printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries\
				\nLorem Ipsum is simply dummy text of the printing and typesetting industry. \
				Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown \
				printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries\
				"
			},
			content3:{
				id:3,
				img:"https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2019/08/01/yq-mincedmeatnoodles-01082019.jpg?itok=O61TCwHj&timestamp=1564648937",
				title:'Noodle dishes for calorie counters at Hougang Fishball Minced Meat Noodles',
				categorie:'Food',
				author:'Andreas Sujono',
				published:'10/08/2019',
				detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
				Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown \
				printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries\
				\nLorem Ipsum is simply dummy text of the printing and typesetting industry. \
				Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown \
				printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries\
				"
			},
		}

	}

	render(){
		return(
			<div className="newsMid container">
				<div className="content row">

					<div className="newsMidLeft col-lg-8 col-12">
						<NewsMidSingle content={this.state.content1} />
						<NewsMidSingle content={this.state.content2} />
						<NewsMidSingle content={this.state.content3} />
					</div>

					<div className="newsMidRight col-lg-4 col-5">
						<InstagramEmbed
						  url='https://www.instagram.com/p/BwYdQ7YhG7I/'
						  maxWidth={300}
						  hideCaption={false}
						  containerTagName='div'
						  protocol=''
						  injectScript
						  onLoading={() => {}}
						  onSuccess={() => {}}
						  onAfterRender={() => {}}
						  onFailure={() => {}}
						/>
					</div>

				</div>


			</div>
		);
	}
}