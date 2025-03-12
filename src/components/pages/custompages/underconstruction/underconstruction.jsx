import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Button, InputGroup, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Imagesdata } from '../../../../common/commonimages';

const UnderConstruction = () => {

	let [days, setdays] = useState()
	let [hours, sethours] = useState()
	let [minutes, setminutes] = useState()
	let [seconds, setseconds] = useState()
	useEffect(() => {
		let countDown = new Date('Dec 1, 2022 00:00:00').getTime();
		let time = setInterval(() => {
			let now = new Date().getTime();
			let distance = countDown + now;
			setdays(Math.floor(distance / (1000 * 60 * 60 * 24)))
			sethours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
			setminutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
			setseconds(Math.floor((distance % (1000 * 60)) / 1000))

			if (distance < 0) {
				clearInterval(time);
			}
		}, 1000)
	});

	return (
		<div>
			<div className="">
				<Row className="no-gutter">
					<Col md={5} lg={6} xl={7} className="d-none d-md-flex bg-primary-transparent">
						<Row className="wd-100p mx-auto text-center">
							<Col md={12} lg={12} xl={12} className="my-auto mx-auto wd-100p">
								<img src={Imagesdata("pngs11")} className="my-auto ht-xl-80p wd-md-100p wd-xl-80p mx-auto" alt="logo" />
							</Col>
						</Row>
					</Col>
					<Col md={7} lg={6} xl={5} className="bg-white py-4">
						<div className="login d-flex align-items-center py-2">
							<Container>
								<Row>
									<div className="main-card-signin construction text-center border-0 mx-auto">
										<div className="p-4 wd-100p mx-auto">
											<div>
												<h2 className="tx-30">Under Maintenance</h2>
												<p className="tx-12 text-muted">Our website is currently undergoing scheduled maintenance. We Should be back shortly. Thank you for your patience!</p>
												<Row className="row-sm mx-auto">
													<div id="count-down" className="center-block mt-3 mb-3 mx-auto">
														<div className="clock-presenter days_dash">
															<div className="digit">{days}</div>
															<p className="mt-2">Days</p>
														</div>
														<div className="clock-presenter hours_dash">
															<div className="digit">{hours}</div>
															<p className="mt-2">Hours</p>
														</div>
														<div className="clock-presenter minutes_dash">
															<div className="digit">{minutes}</div>
															<p className="mt-2">Minutes</p>
														</div>
														<div className="clock-presenter seconds_dash me-0">
															<div className="digit">{seconds}</div>
															<p className="mt-2">Seconds</p>
														</div>
													</div>
												</Row>
												<InputGroup className="mt-5 text-center sub-input mt-1 ml-auto mr-auto mt-6">
													<Form.Control type="text" className="input-lg " placeholder="Enter your Email" />
													<InputGroup.Text className="bg-transparent border-0 p-0">
														<Button type="button" className="btn-danger-gradient btn-lg br-tr-3  br-br-3">Subscribe</Button>
													</InputGroup.Text>
												</InputGroup>
												<div className="mt-4 d-flex mx-auto text-center justify-content-center social-icon-btns">
													<Button className="btn-icon btn-facebook" type="button">
														<span className="btn-inner--icon"> <i className="bx bxl-facebook tx-20 tx-facebook"></i> </span>
													</Button>
													<Button className="btn-icon" type="button">
														<span className="btn-inner--icon"> <i className="bx bxl-twitter tx-20 tx-info"></i> </span>
													</Button>
													<Button className="btn-icon" type="button">
														<span className="btn-inner--icon"> <i className="bx bxl-linkedin tx-20 tx-purple"></i> </span>
													</Button>
													<Button className="btn-icon" type="button">
														<span className="btn-inner--icon"> <i className="bx bxl-instagram tx-20 tx-pink"></i> </span>
													</Button>
												</div>
											</div>
										</div>
									</div>
								</Row>
							</Container>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default UnderConstruction;
