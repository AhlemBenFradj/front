import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Imagesdata } from '../../../../common/commonimages';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			});
			if (!response.ok) {
				throw new Error('Login failed');
			}
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<div>
			<div className="">
				<Row className="no-gutter">
					<Col md={6} lg={6} xl={7} className="d-none d-md-flex bg-primary-transparent">
						<Row className="wd-100p mx-auto text-center">
							<Col md={12} lg={12} xl={12} className="my-auto mx-auto wd-100p">
								<img src={Imagesdata("pngs8")} className="my-auto ht-xl-80p wd-md-100p wd-xl-80p mx-auto" alt="logo" />
							</Col>
						</Row>
					</Col>
					<Col md={6} lg={6} xl={5} className="bg-white py-4">
						<div className="login d-flex align-items-center py-2 px-4">
							<Container className="p-0">
								<Row>
									<Col md={10} lg={10} xl={9} className="mx-auto">
										<div className="card-sigin">
											<div className="mb-5 d-flex">
												<Link to={`${import.meta.env.BASE_URL}indexpage/`}><img src={Imagesdata("favicon")} className="sign-favicon-a ht-40" alt="logo" />
													<img src={Imagesdata("favicon")} className="sign-favicon-b ht-40" alt="logo" />
												</Link>
												<h1 className="main-logo1 ms-1 me-0 my-auto tx-28">Va<span>le</span>x</h1>
											</div>
											<div className="card-sigin">
												<div className="main-signup-header">
													<h2>Welcome back!</h2>
													<h5 className="fw-semibold mb-4">Please sign in to continue.</h5>
													<Form onSubmit={handleSubmit}>
														<Form.Group>
															<Form.Label className="mb-2">Email</Form.Label>
															<Form.Control
																className="mb-3"
																placeholder="Enter your email"
																type="text"
																value={email}
																onChange={(e) => setEmail(e.target.value)}
															/>
														</Form.Group>
														<Form.Group>
															<Form.Label className="mb-2">Password</Form.Label>
															<Form.Control
																className="mb-3"
																placeholder="Enter your password"
																type="password"
																value={password}
																onChange={(e) => setPassword(e.target.value)}
															/>
														</Form.Group>
														{error && <p className="text-danger">{error}</p>}
														<Button type="submit" className="btn-main-primary btn-block">Sign In</Button>
														<Row className="row-xs social-icons">
															<Col sm={6} className="">
																<Button className="btn-block"><i className="fab fa-facebook-f"></i> Signup with Facebook</Button>
															</Col>
															<Col sm={6} className="mg-t-10 mg-sm-t-0">
																<Button className="btn-info btn-block btn-b"><i className="fab fa-twitter"></i> Signup with Twitter</Button>
															</Col>
														</Row>
													</Form>
													<div className="main-signin-footer mt-5">
														<p><Link to={`${import.meta.env.BASE_URL}pages/custompages/forgotpassword`}>Forgot password?</Link></p>
														<p>Don't have an account? <Link to={`${import.meta.env.BASE_URL}pages/custompages/signup`}>Create an Account</Link></p>
													</div>
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

SignIn.propTypes = {};

SignIn.defaultProps = {};

export default SignIn;
