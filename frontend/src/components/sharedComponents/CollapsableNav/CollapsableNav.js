import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Link as ScrollLink} from 'react-scroll'
import './style.scss'

class CollapsableNav extends Component {

    render() {
       const {collapseClass,data} = this.props
        return (
            <div className="collapsableNav">
                <div className="collapseContentContainer">
                    <div className={"collapseContent "+ collapseClass}>
                        <ul>
                        {
                        data.map( (item,idx) => (
                            <li className="collapseIndividual" key={`${item.name}_${idx}`}> 
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
                                    {item.name}
                                </ScrollLink>
                                :
                                item.linkTo ? 
                                <a href={item.linkTo} target="_blank" rel="noopener noreferrer"> 
                                    {item.name} 
                                </a>
                                :
                                <Link to={item.pathTo}> 
                                    {item.name} 
                                </Link>
                                }
                                
                            </li>
                        ))
                        }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default CollapsableNav;