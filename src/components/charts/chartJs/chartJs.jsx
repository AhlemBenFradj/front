import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../layouts/layoutcomponents/pageheader';
import { LineChart, AreaChart, StackedBarChart, HoriStackedBarChart, Solid, Transparency, Gradient, HoriBarChart, HoriGroupedChart, DoughnutChart, PieChart } from '../../../common/chartdata';

const ChartJs = () => {
	return (
		<div>
			<Pageheader titles="Charts" active="Chartjs" />
			<Row className="row-sm">
				<Col sm={12} md={6}>
					<Card className="overflow-hidden">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Line Chart
							</div>
							<p className="mg-b-20">Basic Charts Of Valex template.</p>
							<div className="chartjs-wrapper-demo ">
								<LineChart />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col sm={12} md={6}>
					<Card className="overflow-hidden">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Area Chart
							</div>
							<p className="mg-b-20">Basic Charts Of Valex template.</p>
							<div className="chartjs-wrapper-demo">
								<AreaChart />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row className="row-sm">
				<Col sm={12} md={6}>
					<Card className="overflow-hidden">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Stacked Bar Chart
							</div>
							<p className="mg-b-20">Basic Charts Of Valex template.</p>
							<div className="chartjs-wrapper-demo ht-300">
								<StackedBarChart />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col sm={12} md={6}>
					<Card className="overflow-hidden">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Stacked Bar Chart
							</div>
							<p className="mg-b-20">Basic Charts Of Valex template.</p>
							<div className="chartjs-wrapper-demo ht-300">
								<HoriStackedBarChart />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row className="row-sm">
				<Col md={12}>
					<Row className="row-sm">
						<Col sm={12} md={6} xl={4}>
							<Card className="overflow-hidden">
								<Card.Body>
									<div className="main-content-label tx-12 mg-b-15">
										Solid Color
									</div>
									<div className="ht-200 ht-lg-250">
										<Solid />
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col sm={12} md={6} xl={4} className="mg-t-20 mg-md-t-0">
							<Card className="overflow-hidden">
								<Card.Body>
									<div className="main-content-label tx-12 mg-b-15">
										With Transparency
									</div>
									<div className="ht-200 ht-lg-250">
										<Transparency />
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col sm={12} md={6} xl={4} className="mg-t-20 mg-xl-t-0">
							<Card className="overflow-hidden">
								<Card.Body>
									<div className="main-content-label tx-12 mg-b-15">
										Using Multiple Color
									</div>
									<div className="ht-200 ht-lg-250">
										<Gradient />
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row className="row-sm">
				<Col sm={12} md={6}>
					<Card className="overflow-hidden">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Horizontal Bar Chart
							</div>
							<p className="mg-b-20">Basic Charts Of Valex template.</p>
							<div className="chartjs-wrapper-demo ht-300">
								<HoriBarChart />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col sm={12} md={6}>
					<Card className="overflow-hidden">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Horizontal Bar Chart
							</div>
							<p className="mg-b-20">Basic Charts Of Valex template.</p>
							<div className="chartjs-wrapper-demo ht-300">
								<HoriGroupedChart />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row className="row-sm">
				<Col sm={12} md={6}>
					<Card className="mg-b-md-20 overflow-hidden">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Pie Chart
							</div>
							<p className="mg-b-20">Basic Charts Of Valex template.</p>
							<div className="chartjs-wrapper-demo Chart">
								<DoughnutChart />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col sm={12} md={6}>
					<Card className="overflow-hidden">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Donut Chart
							</div>
							<p className="mg-b-20">Basic Charts Of Valex template.</p>
							<div className="chartjs-wrapper-demo Chart">
								<PieChart />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div >
	)
};

ChartJs.propTypes = {};

ChartJs.defaultProps = {};

export default ChartJs;
