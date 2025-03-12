import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../layouts/layoutcomponents/pageheader';
import { DataAttr, DataAttribute, BarChart, VerticalBarChart, LineChart, VerticalLineChart, DataLineChart, SmoothLineChart, DataChart } from '../../../common/chartdata';

const Echart = () => {
	return (
		<div>
			<Pageheader titles="Charts" active="E charts" />
			<Row className="row-sm">
				<Col lg={6} md={12} className="">
					<Card className="mg-b-20">
						<Card.Body className="">
							<div className="main-content-label mg-b-5">
								Data Attributes
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="ht-300">
								<DataAttr />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6} md={12}>
					<Card className="mg-b-20">
						<Card.Body className="">
							<div className="main-content-label mg-b-5">
								Data Attributes
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="ht-300">
								<DataAttribute />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row className="row-sm">
				<Col lg={6} md={12}>
					<Card className="mg-b-20">
						<Card.Body className="">
							<div className="main-content-label mg-b-5">
								Bar Chart
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="ht-300">
								<BarChart />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6} md={12}>
					<Card className="mg-b-20">
						<Card.Body className="">
							<div className="main-content-label mg-b-5">
								Vertical Bar Chart
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="ht-300">
								<VerticalBarChart />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row className="row-sm">
				<Col lg={6} md={12}>
					<Card className="mg-b-20">
						<Card.Body className="">
							<div className="main-content-label mg-b-5">
								Line Chart
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div id="echart2" className="ht-300">
								<LineChart />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6} md={12}>
					<Card className="mg-b-20">
						<Card.Body className="">
							<div className="main-content-label mg-b-5">
								Vertical Line Chart
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="ht-300">
								<VerticalLineChart />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row className="row-sm">
				<Col lg={6} md={12}>
					<Card className="mg-b-20">
						<Card.Body className="">
							<div className="main-content-label mg-b-5">
								Data Attributes
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="ht-300">
								<DataLineChart />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6} md={12}>
					<Card className="mg-b-20">
						<Card.Body className="">
							<div className="main-content-label mg-b-5">
								Data Attributes
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="ht-300">
								<SmoothLineChart />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row className="row-sm">
				<Col lg={12} md={12} className="">
					<Card>
						<Card.Body className="">
							<div className="main-content-label mg-b-5">
								Data Attributes
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="ht-300">
								<DataChart />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	)
};

Echart.propTypes = {};

Echart.defaultProps = {};

export default Echart;
