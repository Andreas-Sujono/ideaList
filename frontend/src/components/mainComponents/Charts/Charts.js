import React, {Component} from 'react'
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries,MarkSeries} from 'react-vis';

import './style.scss'

class Charts extends Component{

	render(){
		return(
			<div className="charts">
				<h3>Charts</h3>

				<h5>Plot 1</h5>
				<XYPlot
					width={1000}
					height={500}
					className="plot1 plot"
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
				<h5>Plot 2</h5>
				<XYPlot
                    width={800}
					height={300}
					className="plot2 plot"
				>
					<VerticalGridLines />
					<HorizontalGridLines />
					<XAxis />
					<YAxis />
					<MarkSeries
						className="mark-series-example"
						sizeRange={[5, 15]}
						data={[
							{x: 1, y: 10, size: 30},
							{x: 1.3, y: 3, size: 20},
							{x: 1.7, y: 12, size: 10},
							{x: 1.9, y: 6, size: 6},
							{x: 2, y: 5, size: 1},
							{x: 2.5, y: 7, size: 4}
						  ]}/>
				</XYPlot>
			</div>

		);
	}
}

export default Charts