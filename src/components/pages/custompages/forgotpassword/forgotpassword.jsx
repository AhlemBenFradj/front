import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import { Imagesdata } from '../../../../common/commonimages';

const forgetLink = () => {
	alert('A Link has been sent to your mail address, and it is valid up to 1 min..')
}
let BasicAlert = () => {
	Swal.fire('Password Link has been sent to your registered mail..')
}
const ForgotPassword = () => {

	return (
		<div>
			<div className="">
				<Row className="no-gutter">
					<Col md={6} lg={6} xl={7} className="d-none d-md-flex bg-primary-transparent">
						<Row className="wd-100p mx-auto text-center">
							<Col md={12} lg={12} xl={12} className="my-auto mx-auto wd-100p">
								<img src={Imagesdata("pngs3")} className="my-auto ht-xl-80p wd-md-100p wd-xl-80p mx-auto" alt="logo" />
							</Col>
						</Row>
					</Col>
					<Col md={6} lg={6} xl={5} className="bg-white py-4">
						<div className="login d-flex align-items-center py-2 px-4">
							<Container className="p-0">
								<Row className="">
									<Col md={10} lg={10} xl={9} className="mx-auto">
										<div className="mb-5 d-flex">
											<Link to={`${import.meta.env.BASE_URL}indexpage/`}>
												<img src={Imagesdata("favicon")} className="sign-favicon-a ht-40" alt="logo" />
												<img src={Imagesdata("favicon")} className="sign-favicon-b ht-40" alt="logo" />
											</Link>
											<h1 className="main-logo1 ms-1 me-0 my-auto tx-28">Va<span>le</span>x</h1>
										</div>
										<div className="main-card-signin d-md-flex">
											<div className="wd-100p">
												<div className="main-signin-header">
													<h2>Forgot Password!</h2>
													<h4>Please Enter Your Email</h4>
													<Form action="#">
														<Form.Group>
															<Form.Label className="mb-3">Email</Form.Label>
															<Form.Control className="mb-3" placeholder="Enter your email" type="text" />
														</Form.Group>
														<Button href={`${import.meta.env.BASE_URL}indexpage/`} className="btn-main-primary btn-block" >Send</Button>
													</Form>
												</div>
												<div className="main-signup-footer mg-t-20">
													<p>Forget it, <Link to="#" onClick={() => { BasicAlert() }}> Send me back</Link> to the sign in screen.</p>
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

ForgotPassword.propTypes = {};

ForgotPassword.defaultProps = {};

export default ForgotPassword;
