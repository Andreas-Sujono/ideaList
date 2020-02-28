import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import './style.scss'

class Pagination extends Component {
    render() {
        const maxPage = [...Array(parseInt(this.props.maxPage))]
        const currentPage = parseInt(this.props.currentPage)
        console.log("page: ",currentPage)
        return (
            <div aria-label="Page navigation" className="postPageNavigation">
                <ul className="pagination justify-content-center">
                    
                    <li className={`page-item ${currentPage == 1 && "disabled"}`}>
                        <Link className="page-link" to={`/page/${currentPage-1}`}>Previous</Link>
                    </li>
                    {
                        maxPage.map( (item,idx) => (
                            <li className={`page-item ${idx+1 === currentPage && "active"}`} >
                                <Link className="page-link" to={`/page/${idx+1}`}>{idx+1}</Link>
                            </li>
                        ))
                    }
                    <li className={`page-item ${currentPage == maxPage.length && "disabled"}`}>
                        <Link className="page-link" to={`/page/${currentPage+1}`}>Next</Link>
                    </li>
                </ul>
            </div>
        );
    }
}


export default Pagination;