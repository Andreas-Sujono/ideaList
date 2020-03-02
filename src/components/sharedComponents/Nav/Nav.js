import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Link as ScrollLink} from 'react-scroll'
import CollapsableNav from 'components/sharedComponents/CollapsableNav'

import './style.scss'
import data from './utils'

class Nav extends Component{

    state = {
        collapse:true,
        collapseClass:'hidden'
    }

    handleCollapse = () => {
        console.log('clicked')
        this.setState( prevState =>({
            collapse:!prevState.collapse,
            collapseClass:prevState.collapseClass === 'hidden'?'show':'hidden'
        })
        
        )
    }

    render(){
        return (
            <>
            <div className="nav"> 
                <div className="mainContent">
                    <ul>
                        {
                        data.map( (item,idx) => (
                            <li className="linkIndividual" key={`${item.name}_${idx}`}> 
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

                <div className="collapsableIcon">
                    <i className="fas fa-bars" onClick={ this.handleCollapse }></i>
                </div>
            </div>
            <CollapsableNav collapse={this.state.collapse} collapseClass={this.state.collapseClass} data={data}/>
            </>
        );   
    }
}

export default Nav