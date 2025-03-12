import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Imagesdata } from '../../../../common/commonimages';

const LockScreen = () => {

	return (
		<div>
			<div className="">

				<Row className="no-gutter">
					<Col md={6} lg={6} xl={7} className="d-none d-md-flex bg-primary-transparent">
						<Row className="wd-100p mx-auto text-center">
							<Col md={12} lg={12} xl={12} className="my-auto mx-auto wd-100p">
								<img src={Imagesdata("pngs7")} className="my-auto ht-xl-80p wd-md-100p wd-xl-80p mx-auto" alt="logo" />
							</Col>
						</Row>
					</Col>
					<Col md={6} lg={6} xl={5} className="bg-white py-4">
						<div className="login d-flex align-items-center py-2 px-4">
							<Container className="p-0">
								<Row>
									<Col md={10} lg={10} xl={9} className="mx-auto">
										<div className="mb-5 d-flex justify-content-center">
											<Link to={`${import.meta.env.BASE_URL}indexpage/`}>
												<img src={Imagesdata("favicon")} className="sign-favicon-a ht-40" alt="logo" />
												<img src={Imagesdata("favicon")} className="sign-favicon-b ht-40" alt="logo" />
											</Link>
											<h1 className="main-logo1 ms-1 me-0 my-auto tx-28">Va<span>le</span>x</h1>
										</div>
										<div className="main-card-signin d-md-flex bg-white">
											<div className="p-4 wd-100p">
												<div className="main-signin-header">
													<div className="avatar avatar-xxl avatar-xxl mx-auto text-center mb-2">
														<img alt="" className="avatar avatar-xxl rounded-circle  mt-2 mb-2 " src={Imagesdata("faces6")} /></div>
													<div className="mx-auto text-center mt-4 mg-b-20">
														<h5 className="mg-b-10 tx-16">Seif Eddine</h5>
														<p className="tx-13 text-muted">Enter Your Password to View your Screen</p>
													</div>
													<Form action="#">
														<Form.Group className="">
															<Form.Control className="" placeholder="Enter your password" type="password" defaultValue="" />
														</Form.Group>
														<Link to={`${import.meta.env.BASE_URL}indexpage/`} className=" btn btn-main-primary btn-block">Unlock</Link>
													</Form>
												</div>
											</div>
										</div>
									</Col>
								</Row>
							</Container>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	)
};

LockScreen.propTypes = {};

LockScreen.defaultProps = {};

export default LockScreen;
