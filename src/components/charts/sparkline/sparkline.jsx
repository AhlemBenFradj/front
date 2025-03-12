import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../layouts/layoutcomponents/pageheader';
import { BarChart, AreaChart, ColoredAreaChart, ColoredLineChart, LineChart1, ColoredBarChart, StackedBarChart, ColoredStackedBarChart, Sparklinedata, ColoredDonutChart } from '../../../common/chartdata';

const Sparkline = () => {
	return (
		<div>
			<Pageheader titles="Charts" active="Sparkline-chart" />
			<Row className="row-sm">
				<Col lg={6} className="col-lg-6">
					<Card className="mg-b-20 overflow-hidden">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Line Chart
							</div>
							<p className="mg-b-20">Below is the basic line chart example.</p>
							<div className="d-sm-flex">
								<div className="">
									<LineChart1 />
								</div>
								<div className="mg-t-20 mg-sm-t-0 mg-sm-l-30">
									<ColoredLineChart />
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<div className="col-lg-6">
					<div className="card mg-b-20 overflow-hidden">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Area Chart
							</div>
							<p className="mg-b-20">Below is the area bar chart example.</p>
							<div className="d-sm-flex">
								<div className="">
									<AreaChart />
								</div>
								<div className="mg-t-20 mg-sm-t-0 mg-sm-l-30">
									<ColoredAreaChart />
								</div>
							</div>
						</Card.Body>
					</div>
				</div>
			</Row>
			<div className="row row-sm">
				<div className="col-lg-6">
					<div className="card mg-b-20 overflow-hidden">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Bar Chart
							</div>
							<p className="mg-b-20">Below is the basic bar chart example.</p>
							<div className="d-sm-flex">
								<div className="">
									<ColoredBarChart />
								</div>
								<div className="mg-t-20 mg-sm-t-0 mg-sm-l-30">
									<ColoredBarChart />

								</div>
							</div>
						</Card.Body>
					</div>
				</div>

				<div className="col-lg-6">
					<div className="card mg-b-20 overflow-hidden">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Stacked Bar Chart
							</div>
							<p className="mg-b-20">Below is the basic stacked bar chart example.</p>
							<div className="d-sm-flex">
								<div className="">
									<StackedBarChart />
								</div>
								<div className="mg-t-20 mg-sm-t-0 mg-sm-l-30">
									<ColoredStackedBarChart />
								</div>
							</div>
						</Card.Body>
					</div>
				</div>
			</div>
			<div className="row row-sm">
				<div className="col-md-12">
					<div className="card">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Pie Chart
							</div>
							<p className="mg-b-20">An example of a pie chart with two series.</p>
							<div className="d-flex">
								<div className="">
									<Sparklinedata />
								</div>
								<div className="mg-l-30">
									<ColoredDonutChart />
								</div>
							</div>
						</Card.Body>
					</div>
				</div>
			</div>
		</div>
	)
};

Sparkline.propTypes = {};

Sparkline.defaultProps = {};

export default Sparkline;
