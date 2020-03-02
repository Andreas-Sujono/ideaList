import React, { Component } from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries,HeatmapSeries} from 'react-vis';
import SideNav from 'components/sharedComponents/SideNav'
import DashboardCard from './DashboardCard'

import './style.scss'
const mockupData = [
    {
        type:'constant',
        title:'Number of Post',
        payload:'1,424',
        textColor:'maroon'
    },
    {
        type:'constant',
        title:'Number of Likes',
        payload:'20,018',
        textColor:'rgb(3, 45, 143)'
    },
    {
        type:'constant',
        title:'Number of Reviews',
        payload:'150',
        textColor:'rgb(5,161,167)'
    },
]

const mockupData2 = [
    {
        type:'chart',
        graphType:'lineChart',
        title:'Number of Visitors',
        payload:[
            {x: 1, y: 10, size: 30},
            {x: 1.3, y: 3, size: 20},
            {x: 1.7, y: 12, size: 10},
            {x: 1.9, y: 6, size: 6},
            {x: 2, y: 5, size: 1},
            {x: 2.5, y: 7, size: 4}
          ],
        textColor:'rgb(5,161,167)'
    },
    {
        type:'constant',
        title:'Number of friends',
        payload:'20',
        textColor:'rgb(3, 45, 143)'
    },
]

class Admin extends Component {
    render() {
        return (
            <div className="admin">
                <SideNav/>
                <div className="adminContent">    
                    <h3>Dashboard</h3>   
                    <div className="adminCard row">
                        {mockupData.map( item => <DashboardCard content={item} col="col"/>)}
                    </div>
                    <div className="row">
                        <div className="adminSideCard row col col-lg-4">
                            {mockupData2.map( item => <DashboardCard content={item} col="col"/>)}
                        </div>
                        <div className="adminMainGraph col">
                            <h4>Activities</h4>
                            <hr/>
                            <XYPlot
                                width={700}
                                height={400}
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
                                <LineSeries
                                    data={[
                                        {x: 1, y: 2},
                                        {x: 3, y: 4},
                                        {x: 10, y: 6}
                                    ]}/>
                            </XYPlot>
                        </div>
                    </div>

                    

                </div>
            </div>
        );
    }
}

export default Admin;