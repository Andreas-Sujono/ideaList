import React, { Component } from 'react';
import TopContact from 'components/sharedComponents/TopContact'
import Header from 'components/sharedComponents/Header'
import Nav from 'components/sharedComponents/Nav'
import Footer from 'components/sharedComponents/Footer'

import InstagramEmbed from 'react-instagram-embed';
import NewsSingleCard from 'components/sharedComponents/NewsSingleCard'


import data from './utils'

import './style.scss'

class Home extends Component {
    render() {
        const [first, second, third] = data //rank the top three news

        return (
            <div className="home">
                <TopContact/>
                <Header/>
                <Nav/>

                <div className="newsTop container" >
                    <div className="row">
                        <div className="newsTopLeft col-lg-7 col-12">
                            <img src={first.img}
                            alt="news1"/>

                                <div className="newsCategories">
                                    {first.category}
                                </div>

                                <div className="newsTitle newsTitle1">
                                    {first.title}
                                </div>

                                <div className="newsAdd">
                                    <div className="newsAuthor"> <i class="fa fa-user"></i> {first.author}</div>
                                    <div className="newsPublished"> <i class="fa fa-calendar"></i> {first.published}  </div>
                                </div>
                        </div>

                        <div className="newsTopRight col-lg-5 col-12">
                            <div className="newsTop1 col-12">
                                <img src={second.img}
                                alt="news2"/>

                                    <div className="newsCategories">
                                        {second.category}
                                    </div>

                                    <div className="newsTitle newsTitle2">
                                        {second.title}
                                    </div>

                                    <div className="newsAdd">
                                        <div className="newsAuthor"> <i class="fa fa-user"></i> {second.author}</div>
                                        <div className="newsPublished">  <i class="fa fa-calendar"></i> {second.published} </div>
                                    </div>
                            </div>

                            <div className="newsTop2 col-12">
                                <img src={third.img} alt="news2"/>
                                    <div className="newsCategories">
                                        {third.category}
                                    </div>

                                    <div className="newsTitle newsTitle3">
                                        {third.title}
                                    </div>

                                    <div className="newsAdd">
                                        <div className="newsAuthor"><i class="fa fa-user"></i> {third.author}</div>
                                        <div className="newsPublished">  <i class="fa fa-calendar"></i> {third.published}  </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="newsMid container">
                    <div className="content row">

                        <div className="newsMidLeft col-lg-8 col-12">
                            {
                                data.map( (item,idx) => (
                                    <NewsSingleCard key={`${item.title}_${idx}`} content={item} />
                                ))  
                            }
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

                <Footer/>
                
            </div>
        );
    }
}

export default Home;