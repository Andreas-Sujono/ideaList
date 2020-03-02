import React, { Component } from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries,MarkSeries} from 'react-vis';
import './style.scss'

/*
need props: 
    title, 
    content ( type: <chart>,<constant> ) --> show graph or number constant
    sideAttr (show date/ button)
*/

class DashboardCard extends Component {
    render() {
        const {content,col} = this.props
        return (
            <div className={`dashboardCard ${col}`}>
                <h3>{content.title}</h3>
                <hr/>
                <div className="dasboardCardCContent" style={{color:content.textColor}}>
                    {content.type === 'constant' ? content.payload : 
                    <XYPlot
                    width={350}
                    height={200}
                    >
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis />
                        <YAxis />
                        <MarkSeries
                            className="mark-series-example"
                            sizeRange={[5, 15]}
                            data={content.payload}/>
                    </XYPlot>
                    }
                </div>
            </div>
        );
    }
}

export default DashboardCard;