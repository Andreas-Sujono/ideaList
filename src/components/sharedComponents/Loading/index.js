import React from 'react'

import './style.scss'

const Loading = () => {
    return(
        <div className="loadingPageContainer">
            <div className="loadingPage">
                <div className="loaderSpin"></div>
                <h4> Loading....</h4>
            </div>
        </div>
    )
}

export default Loading