import React, { Fragment } from 'react';
import { Row, Col, Card, ListGroup, Table, ProgressBar, Dropdown } from 'react-bootstrap';
import { OrderStatus, Order, DangerEarnings, SuccessEarning, Sold, Samantha, Jimmy, Gabe, Manuel, Sharon, RecentOrder } from '../../common/commondata';
import { Link } from 'react-router-dom';
import { Imagesdata } from '../../common/commonimages';
import { UsaMapwithAnnotation } from '../../common/mapsdata';

const Indexpage = () => {
	let mapHandler = (event) => {
		alert(event.target.dataset.name);
	};

	return (
		<Fragment>
			<div className="breadcrumb-header justify-content-between">
				<div className="left-content">
					<div>
						<h2 className="main-content-title tx-24 mg-b-1 mg-b-lg-1">Hi, welcome back!</h2>
						<p className="mg-b-0">Sales monitoring dashboard template.</p>
					</div>
				</div>
				<div className="main-dashboard-header-right">
					<div>
						<label className="tx-13">Customer Ratings</label>
						<div className="main-star">
							<i className="typcn typcn-star active"></i> <i className="typcn typcn-star active"></i> <i className="typcn typcn-star active"></i> <i className="typcn typcn-star active"></i> <i className="typcn typcn-star"></i> <span>(14,873)</span>
						</div>
					</div>
					<div>
						<label className="tx-13">Online Sales</label>
						<h5>563,275</h5>
					</div>
					<div>
						<label className="tx-13">Offline Sales</label>
						<h5>783,675</h5>
					</div>
				</div>
			</div>
			<Row className="row-sm">
				<Col xl={3} lg={6} md={6} xm={12}>
					<Card className="overflow-hidden sales-card bg-primary-gradient">
						<div className="px-3 pt-3  pb-2 pt-0">
							<div className="">
								<h6 className="mb-3 tx-12 text-white">TODAY ORDERS</h6>
							</div>
							<div className="pb-0 mt-0">
								<div className="d-flex">
									<div className="">
										<h4 className="tx-20 fw-bold mb-1 text-white">$5,74.12</h4>
										<p className="mb-0 tx-12 text-white op-7">Compared to last week</p>
									</div>
									<span className="float-end my-auto ms-auto">
										<i className="fas fa-arrow-circle-up text-white"></i>
										<span className="text-white op-7"> +427</span>
									</span>
								</div>
							</div>
						</div>
						<Order />
					</Card>
				</Col>
				<Col xl={3} lg={6} md={6} xm={12}>
					<Card className="overflow-hidden sales-card bg-danger-gradient">
						<div className="px-3 pt-3  pb-2 pt-0">
							<div className="">
								<h6 className="mb-3 tx-12 text-white">TODAY EARNINGS</h6>
							</div>
							<div className="pb-0 mt-0">
								<div className="d-flex">
									<div className="">
										<h4 className="tx-20 fw-bold mb-1 text-white">$1,230.17</h4>
										<p className="mb-0 tx-12 text-white op-7">Compared to last week</p>
									</div>
									<span className="float-end my-auto ms-auto">
										<i className="fas fa-arrow-circle-down text-white"></i>
										<span className="text-white op-7"> -23.09%</span>
									</span>
								</div>
							</div>
						</div>
						<DangerEarnings />
					</Card>
				</Col>
				<Col xl={3} lg={6} md={6} xm={12}>
					<Card className="overflow-hidden sales-card bg-success-gradient">
						<div className="px-3 pt-3  pb-2 pt-0">
							<div className="">
								<h6 className="mb-3 tx-12 text-white">TOTAL EARNINGS</h6>
							</div>
							<div className="pb-0 mt-0">
								<div className="d-flex">
									<div className="">
										<h4 className="tx-20 fw-bold mb-1 text-white">$7,125.70</h4>
										<p className="mb-0 tx-12 text-white op-7">Compared to last week</p>
									</div>
									<span className="float-end my-auto ms-auto">
										<i className="fas fa-arrow-circle-up text-white"></i>
										<span className="text-white op-7"> 52.09%</span>
									</span>
								</div>
							</div>
						</div>

						<SuccessEarning />
					</Card>
				</Col>
				<Col xl={3} lg={6} md={6} xm={12}>
					<Card className="overflow-hidden sales-card bg-warning-gradient">
						<div className="px-3 pt-3  pb-2 pt-0">
							<div className="">
								<h6 className="mb-3 tx-12 text-white">PRODUCT SOLD</h6>
							</div>
							<div className="pb-0 mt-0">
								<div className="d-flex">
									<div className="">
										<h4 className="tx-20 fw-bold mb-1 text-white">$4,820.50</h4>
										<p className="mb-0 tx-12 text-white op-7">Compared to last week</p>
									</div>
									<span className="float-end my-auto ms-auto">
										<i className="fas fa-arrow-circle-down text-white"></i>
										<span className="text-white op-7"> -152.3</span>
									</span>
								</div>
							</div>
						</div>

						<Sold />
					</Card>
				</Col>
			</Row>
			<Row className="row-sm">
				<Col md={12} lg={12} xl={7}>
					<Card>
						<Card.Header className="bg-transparent pd-b-0 pd-t-20 bd-b-0">
							<div className="d-flex justify-content-between">
								<Card.Title as='h4' className="card-title mb-0">Order status</Card.Title>
								<Dropdown>
									<Dropdown.Toggle as='a' variant="light" className='no-caret' id="dropdown-basic">
										<i className="mdi mdi-dots-horizontal text-gray"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu style={{ marginTop: '0px' }}>
										<Dropdown.Item>Action</Dropdown.Item>
										<Dropdown.Item>Another action</Dropdown.Item>
										<Dropdown.Item>Something else</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<p className="tx-12 text-muted mb-0">Order Status and Tracking. Track your order from ship date to arrival. To begin, enter your order number.</p>
						</Card.Header>
						<Card.Body className="b-p-apex">
							<div className="total-revenue pb-0">
								<div>
									<h4>120,750</h4>
								</div>
								<div>
									<h4>56,108</h4>
								</div>
								<div>
									<h4>32,895</h4>
								</div>
							</div>

							<OrderStatus />
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12} xl={5}>
					<Card className="card-dashboard-map-one">
						<label className="main-content-label">Sales Revenue by Customers in USA</label>
						<span className="d-block mg-b-20 text-muted tx-12">Sales Performance of all states in the United States</span>
						<div className="cl-71 text-center">
							<UsaMapwithAnnotation />
						</div>
					</Card>
				</Col>
			</Row>
			<Row className="row-sm">
				<Col xl={4} md={12} lg={12} className="">
					<Card>
						<Card.Header className="pb-1">
							<Card.Title as='h3' className="mb-2">Recent Customers</Card.Title>
							<p className="tx-12 mb-0 text-muted">A customer is an individual or business that purchases the goods service has evolved to include real-time</p>
						</Card.Header>
						<Card.Body className="p-0 customers mt-1">
							<ListGroup className="list-lg-group list-group-flush">
								<ListGroup.Item className="list-group-item-action">
									<div className="media mt-0">
										<img className="avatar-lg rounded-circle my-auto me-3" src={Imagesdata("faces3")} alt="Image description" />
										<div className="media-body">
											<div className="d-flex align-items-center">
												<div className="mt-0">
													<h5 className="mb-1 tx-15">Samantha Melon</h5>
													<p className="mb-0 tx-13 text-muted">User ID: #1234 <span className="text-success ms-2">Paid</span></p>
												</div>
												<div className="ms-auto wd-45p fs-16 mt-2">
													<Samantha />
												</div>
											</div>
										</div>
									</div>
								</ListGroup.Item>
								<ListGroup.Item className="list-group-item-action br-t-1">
									<div className="media mt-0">
										<img className="avatar-lg rounded-circle my-auto me-3" src={Imagesdata("faces11")} alt="Image description" />
										<div className="media-body">
											<div className="d-flex align-items-center">
												<div className="mt-1">
													<h5 className="mb-1 tx-15">Jimmy Changa</h5>
													<p className="mb-0 tx-13 text-muted">User ID: #1234 <span className="text-danger ms-2">Pending</span></p>
												</div>
												<div className="ms-auto wd-45p fs-16 mt-2">
													<Jimmy />
												</div>
											</div>
										</div>
									</div>
								</ListGroup.Item>
								<ListGroup.Item className="list-group-item-action br-t-1">
									<div className="media mt-0">
										<img className="avatar-lg rounded-circle my-auto me-3" src={Imagesdata("faces17")} alt="Image description" />
										<div className="media-body">
											<div className="d-flex align-items-center">
												<div className="mt-1">
													<h5 className="mb-1 tx-15">Gabe Lackmen</h5>
													<p className="mb-0 tx-13 text-muted">User ID: #1234<span className="text-danger ms-2">Pending</span></p>
												</div>
												<div className="ms-auto wd-45p fs-16 mt-2">
													<Gabe />
												</div>
											</div>
										</div>
									</div>
								</ListGroup.Item>
								<ListGroup.Item className="list-group-item-action br-t-1">
									<div className="media mt-0">
										<img className="avatar-lg rounded-circle my-auto me-3" src={Imagesdata("faces15")} alt="Image description" />
										<div className="media-body">
											<div className="d-flex align-items-center">
												<div className="mt-1">
													<h5 className="mb-1 tx-15">Manuel Labor</h5>
													<p className="mb-0 tx-13 text-muted">User ID: #1234<span className="text-success ms-2">Paid</span></p>
												</div>
												<div className="ms-auto wd-45p fs-16 mt-2">
													<Manuel />
												</div>
											</div>
										</div>
									</div>
								</ListGroup.Item>
								<ListGroup.Item className="list-group-item-action br-t-1 br-br-7 br-bl-7">
									<div className="media mt-0">
										<img className="avatar-lg rounded-circle my-auto me-3" src={Imagesdata("faces6")} alt="Image description" />
										<div className="media-body">
											<div className="d-flex align-items-center">
												<div className="mt-1">
													<h5 className="mb-1 tx-15">Sharon Needles</h5>
													<p className="b-0 tx-13 text-muted mb-0">User ID: #1234<span className="text-success ms-2">Paid</span></p>
												</div>
												<div className="ms-auto wd-45p fs-16 mt-2">
													<Sharon />
												</div>
											</div>
										</div>
									</div>
								</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4} md={12} lg={6} className="">
					<Card>
						<Card.Header className="pb-1">
							<Card.Title as='h3' className="mb-2">Sales Activity</Card.Title>
							<p className="tx-12 mb-0 text-muted">Sales activities are the tactics that salespeople use to achieve their goals and objective</p>
						</Card.Header>
						<Card.Body className="product-timeline pt-2 mt-1">
							<ul className="timeline-1 mb-0">
								<li className="mt-0" id="mrg-8"> <i className="ti-pie-chart bg-primary-gradient text-white product-icon"></i> <span className="fw-semibold mb-4 tx-14 ">Total Products</span> <Link to="#" className="float-end tx-11 text-muted">3 days ago</Link>
									<p className="mb-0 text-muted tx-12">1.3k New Products</p>
								</li>
								<li className="mt-0" id="mrg-8"> <i className="mdi mdi-cart-outline bg-danger-gradient text-white product-icon"></i> <span className="fw-semibold mb-4 tx-14 ">Total Sales</span> <Link to="#" className="float-end tx-11 text-muted">35 mins ago</Link>
									<p className="mb-0 text-muted tx-12">1k New Sales</p>
								</li>
								<li className="mt-0" id="mrg-8"> <i className="ti-bar-chart-alt bg-success-gradient text-white product-icon"></i> <span className="fw-semibold mb-4 tx-14 ">Toatal Revenue</span> <Link to="#" className="float-end tx-11 text-muted">50 mins ago</Link>
									<p className="mb-0 text-muted tx-12">23.5K New Revenue</p>
								</li>
								<li className="mt-0" id="mrg-8"> <i className="ti-wallet bg-warning-gradient text-white product-icon"></i> <span className="fw-semibold mb-4 tx-14 ">Toatal Profit</span> <Link to="#" className="float-end tx-11 text-muted">1 hour ago</Link>
									<p className="mb-0 text-muted tx-12">3k New profit</p>
								</li>
								<li className="mt-0" id="mrg-8"> <i className="si si-eye bg-purple-gradient text-white product-icon"></i> <span className="fw-semibold mb-4 tx-14 ">Customer Visits</span> <Link to="#" className="float-end tx-11 text-muted">1 day ago</Link>
									<p className="mb-0 text-muted tx-12">15% increased</p>
								</li>
								<li className="mt-0 mb-0 mrg-8"> <i className="icon-note icons bg-primary-gradient text-white product-icon"></i> <span className="fw-semibold mb-4 tx-14 ">Customer Reviews</span> <Link to="#" className="float-end tx-11 text-muted">1 day ago</Link>
									<p className="mb-0 text-muted tx-12">1.5k reviews</p>
								</li>
							</ul>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4} md={12} lg={6} className="col-xl-4 col-md-12 col-lg-6">
					<Card>
						<Card.Header className="pb-0">
							<Card.Title as='h3' className="mb-2">Recent Orders</Card.Title>
							<p className="tx-12 mb-0 text-muted">An order is an investor's instructions to a broker or brokerage firm to purchase or sell</p>
						</Card.Header>
						<Card.Body className="sales-info ot-0 pb-0 pt-0">
							<RecentOrder />
							<Row className="sales-infomation pb-0 mb-0 mx-auto wd-100p justify-content-center">
								<Col md={6} className='col'>
									<p className="mb-0 d-flex"><span className="legend bg-primary brround"></span>Delivered</p>
									<h3 className="mb-1">5238</h3>
									<div className="">
										<p className="text-muted ">Last 6 months</p>
									</div>
								</Col>
								<Col md={6} className='col'>
									<p className="mb-0 d-flex"><span className="legend bg-info brround"></span>Cancelled</p>
									<h3 className="mb-1">3467</h3>
									<div className="">
										<p className="text-muted">Last 6 months</p>
									</div>
								</Col>
							</Row>
						</Card.Body>
					</Card>
					<Card>
						<Card.Body>
							<Row>
								<Col md={6}>
									<div className="d-flex align-items-center pb-2">
										<p className="mb-0">Total Sales</p>
									</div>
									<h4 className="fw-bold mb-2">$7,590</h4>
									<ProgressBar className='progress-style progress-sm' variant="primary" now={78} />
								</Col>
								<Col md={6} className="mt-4 mt-md-0">
									<div className="d-flex align-items-center pb-2">
										<p className="mb-0">Active Users</p>
									</div>
									<h4 className="fw-bold mb-2">$5,460</h4>
									<ProgressBar className='progress-style progress-sm' variant="danger" now={40} />
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row className="row-sm row-deck">
				<Col md={12} lg={4} xl={4}>
					<Card className="card-dashboard-eight pb-2">
						<Card.Title as='h3'>Your Top Countries</Card.Title><span className="d-block mg-b-10 text-muted tx-12">Sales performance revenue based by country</span>
						<ListGroup className="border">
							<ListGroup.Item className="border-top-0" id="br-t-0">
								<i className="flag-icon flag-icon-us flag-icon-squared"></i>
								<p>United States</p><span>$1,671.10</span>
							</ListGroup.Item>
							<ListGroup.Item>
								<i className="flag-icon flag-icon-nl flag-icon-squared"></i>
								<p>Netherlands</p><span>$1,064.75</span>
							</ListGroup.Item>
							<ListGroup.Item>
								<i className="flag-icon flag-icon-gb flag-icon-squared"></i>
								<p>United Kingdom</p><span>$1,055.98</span>
							</ListGroup.Item>
							<ListGroup.Item>
								<i className="flag-icon flag-icon-ca flag-icon-squared"></i>
								<p>Canada</p><span>$1,045.49</span>
							</ListGroup.Item>
							<ListGroup.Item>
								<i className="flag-icon flag-icon-in flag-icon-squared"></i>
								<p>India</p><span>$1,930.12</span>
							</ListGroup.Item>
							<ListGroup.Item className="border-bottom-0 mb-0">
								<i className="flag-icon flag-icon-au flag-icon-squared"></i>
								<p>Australia</p><span>$1,042.00</span>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
				<Col md={12} lg={8} xl={8} className="col-md-12 col-lg-8 col-xl-8">
					<Card className="card-table-two">
						<div className="d-flex justify-content-between">
							<Card.Title as='h4' className="mb-1">Your Most Recent Earnings</Card.Title>
							<Dropdown>
								<Dropdown.Toggle as='a' variant="light" className='no-caret' id="dropdown-basic">
									<i className="mdi mdi-dots-horizontal text-gray"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu style={{ marginTop: '0px' }}>
									<Dropdown.Item>Action</Dropdown.Item>
									<Dropdown.Item>Another action</Dropdown.Item>
									<Dropdown.Item>Something else</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
						<span className="tx-12 tx-muted mb-3 ">This is your most recent earnings for today's date.</span>
						<div className="table-responsive country-table">
							<Table className="table-striped table-bordered mb-0 text-sm-nowrap text-lg-nowrap text-xl-nowrap">
								<thead>
									<tr>
										<th className="wd-lg-25p">Date</th>
										<th className="wd-lg-25p tx-right">Sales Count</th>
										<th className="wd-lg-25p tx-right">Earnings</th>
										<th className="wd-lg-25p tx-right">Tax Witheld</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>05 Dec 2019</td>
										<td className="tx-right tx-medium tx-inverse">34</td>
										<td className="tx-right tx-medium tx-inverse">$658.20</td>
										<td className="tx-right tx-medium tx-danger">-$45.10</td>
									</tr>
									<tr>
										<td>06 Dec 2019</td>
										<td className="tx-right tx-medium tx-inverse">26</td>
										<td className="tx-right tx-medium tx-inverse">$453.25</td>
										<td className="tx-right tx-medium tx-danger">-$15.02</td>
									</tr>
									<tr>
										<td>07 Dec 2019</td>
										<td className="tx-right tx-medium tx-inverse">34</td>
										<td className="tx-right tx-medium tx-inverse">$653.12</td>
										<td className="tx-right tx-medium tx-danger">-$13.45</td>
									</tr>
									<tr>
										<td>08 Dec 2019</td>
										<td className="tx-right tx-medium tx-inverse">45</td>
										<td className="tx-right tx-medium tx-inverse">$546.47</td>
										<td className="tx-right tx-medium tx-danger">-$24.22</td>
									</tr>
									<tr>
										<td>09 Dec 2019</td>
										<td className="tx-right tx-medium tx-inverse">31</td>
										<td className="tx-right tx-medium tx-inverse">$425.72</td>
										<td className="tx-right tx-medium tx-danger">-$25.01</td>
									</tr>
								</tbody>
							</Table>
						</div>
					</Card>
				</Col>
			</Row>
		</Fragment>
	)
};

Indexpage.defaultProps = {};

export default Indexpage;
