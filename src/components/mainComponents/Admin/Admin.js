import React, { Component } from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries,HeatmapSeries} from 'react-vis';
import SideNav from 'components/sharedComponents/SideNav'

import './style.scss'

class Admin extends Component {
    render() {
        return (
            <div className="admin">
                <SideNav/>
                <div className="adminContent">
                    <h4>Line Chart</h4>
                    <XYPlot
                        width={300}
                        height={300}
                    >
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis />
                        <YAxis />
                        <LineSeries
                            data={[
                                {x: 1, y: 4},
                                {x: 5, y: 2},
                                {x: 15, y: 6}
                            ]}/>
                    </XYPlot>

                    <XYPlot
                        width={300}
                        height={300}
                    >
                        <XAxis />
                        <YAxis />
                        <HeatmapSeries
                            colorType="literal"
                            data={[
                                {x: 1, y: 0, color: 'FFF'},
                                {x: 1, y: 5, color: 'F34'},
                                {x: 1, y: 10, color: '34A'},
                                {x: 1, y: 15, color: 'A22'},
                                {x: 2, y: 0, color: '23A'},
                                {x: 2, y: 5, color: 'B72'},
                                {x: 2, y: 10, color: 'AA2'},
                                {x: 2, y: 15, color: 'C34F'},
                                {x: 3, y: 0, color: '0AA'},
                                {x: 3, y: 5, color: '234'},
                                {x: 3, y: 10, color: '345'},
                                {x: 3, y: 15, color: '456'}
                              ]}
                        />
                    </XYPlot>

                </div>
            </div>
        );
    }
}

export default Admin;