import React, {Component} from 'react'

export default class NewsTop extends Component{
	constructor(){
		super()
		this.state= {
			content1:{
				img:"http://d279m997dpfwgl.cloudfront.net/wp/2019/07/AP_19143090374548-e1564788889887-1000x597.jpg",
				title:'Five key Premier League matches to watch in the coming weeks as season kicks off',
				categorie:'Sports',
				author:'Andreas Sujono',
				published:'10/08/2019'
			},
			content2:{
				img:"https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2019/08/07/fh-worklife-07_2x.jpg?itok=wV6i_lDs&timestamp=1565156884",
				title:'Singapore ranks 32 out of 40 in new index on work-life balance',
				categorie:'Life',
				author:'Andreas Sujono',
				published:'10/08/2019'
			},
			content3:{
				img:"https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2019/08/01/yq-mincedmeatnoodles-01082019.jpg?itok=O61TCwHj&timestamp=1564648937",
				title:'Noodle dishes for calorie counters at Hougang Fishball Minced Meat Noodles',
				categorie:'Food',
				author:'Andreas Sujono',
				published:'10/08/2019'
			}
		}

	}

	render(){
		return(
			<div className="newsTop container" >
				
				<div className="row">

					<div className="newsTopLeft col-lg-7 col-12">
						<img src={this.state.content1.img}
						alt="news1"/>

							<div className="newsCategories">
								{this.state.content1.categorie}
							</div>

							<div className="newsTitle newsTitle1">
								{this.state.content1.title}
							</div>

							<div className="newsAdd">
								<div className="newsAuthor"> <i class="fa fa-user"></i> {this.state.content1.author}</div>
								<div className="newsPublished"> <i class="fa fa-calendar"></i> {this.state.content1.published}  </div>
							</div>

					</div>

					<div className="newsTopRight col-lg-5 col-12">

						<div className="newsTop1 col-12">

							<img src={this.state.content2.img}
							alt="news2"/>

								<div className="newsCategories">
									{this.state.content2.categorie}
								</div>

								<div className="newsTitle newsTitle2">
									{this.state.content2.title}
								</div>

								<div className="newsAdd">
									<div className="newsAuthor"> <i class="fa fa-user"></i> {this.state.content2.author}</div>
									<div className="newsPublished">  <i class="fa fa-calendar"></i> {this.state.content2.published} </div>
								</div>

						</div>

						<div className="newsTop2 col-12">

							<img src={this.state.content3.img} alt="news2"/>

								<div className="newsCategories">
									{this.state.content3.categorie}
								</div>

								<div className="newsTitle newsTitle3">
									{this.state.content3.title}
								</div>

								<div className="newsAdd">
									<div className="newsAuthor"><i class="fa fa-user"></i> {this.state.content3.author}</div>
									<div className="newsPublished">  <i class="fa fa-calendar"></i> {this.state.content3.published}  </div>
								</div>
							</div>



					</div>
				</div>

			</div>
		);
	}
}