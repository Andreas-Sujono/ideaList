import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Link as ScrollLink} from 'react-scroll'

import defaultPhoto from 'assets/profileDefault.jpg'
import './style.scss'
import data from './utils'

class SideNav extends Component{
    render(){
        return (
            <div className="sideNav"> 
                <h3>Admin</h3>
                <hr/>
                <div className="profile">
                    <img src={defaultPhoto}/>
                    <span>Andreas Sujono</span>
                </div>
                <hr/>
                <div className="mainContent">
                    <ul>
                        {
                        data.map( (item,idx) => (
                            <li className="linkIndividual" key={`${item.name}_${idx}`} className={item.name}> 
                                {
                                item.scrollTo ?  
                                <ScrollLink
                                    activeClass="active"
                                    to={item.scrollTo}
                                    spy={true}
                                    smooth={true}
                                    offset={-40}
                                    duration= {500}
                                >
                                    {item.logo && <span dangerouslySetInnerHTML={{__html: item.logo}}/> }
                                    {item.name}                                
                                </ScrollLink>
                                :
                                item.linkTo ? 
                                <a href={item.linkTo} target="_blank" rel="noopener noreferrer"> 
                                    {item.logo && <span dangerouslySetInnerHTML={{__html: item.logo}}/> }
                                    {item.name}   
                                </a>
                                :
                                <Link to={item.pathTo}> 
                                    {item.logo && <span dangerouslySetInnerHTML={{__html: item.logo}}/> }
                                    {item.name}   
                                </Link>
                                }
                                <span className="arrow"> &gt; </span>
                            </li>
                        ))
                        }
                    </ul> 
                </div>
            </div>
        );   
    }
}

export default SideNav