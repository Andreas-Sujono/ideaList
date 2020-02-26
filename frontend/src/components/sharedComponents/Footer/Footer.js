import React from 'react'
import './style.scss'
import logo from 'assets/ideaListLogo.png'

const Footer = (props) => {
    return(
        <div className="footer" id="footer">
            <div class="row">
                <div className="logoLeft col-md-2 col-12">
                    <img src={logo} />
                </div>

                <div className="section1 col-md-4 col-12">
                    <h2> Features </h2>
                    <div class="contentSection1">
                        <ul>
                            <li>News/Post Admin</li>
                            <li>Online Chat</li>
                            <li>User Reviews</li>
                            <li>Analytics</li>
                        </ul>
                    </div>
                </div>

                <div className="section2 col-md-3 col-12">
                    <h2> Community </h2>
                    <div class="contentSection2">
                        <ul>
                            <li>Github</li>
                        </ul>
                    </div>
                </div>

                <div className="section3 col-md-3 col-12">
                    <h2> Contact </h2>
                    <div class="contentSection3">
                        <ul>
                            <li>email: ideaList_hr@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer