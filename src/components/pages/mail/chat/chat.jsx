import React, { useEffect } from 'react';
import { Card, Col, Nav, Row, OverlayTrigger, Tooltip, Form, Dropdown } from 'react-bootstrap';
import { Scrollbar } from 'react-scrollbars-custom';
import { Link } from 'react-router-dom';
import { Imagesdata } from '../../../../common/commonimages';
import Pageheader from '../../../../layouts/layoutcomponents/pageheader';
import {charts} from '../../../../common/commondata';

const Chat = () => {

	useEffect(() => {
		let contactItem = document.querySelectorAll(".main-contact-item")
		contactItem.forEach((ele => {
			ele.addEventListener("click", () => {
				console.log(Math.random());
				document.body.classList.add("main-content-body-show")
				document.body.classList.add("sidebar-gone")
			});
		}))
	})


	return (

		<div>
			<Pageheader titles="Mail" active="Chat" />
			<Row className="row-sm mb-4">
				<Col xl={12}>
					<Row className='row-deck'>
						<Col lg={12} xl={6} xxl={3} className="">
							<Card>
								<div className='main-content-left main-content-left-chat overflow-hidden'>
									<div id="left-tabs-example">
										<Nav as="ul" variant="" className="main-nav-line main-nav-line-chat nav-tabs" defaultActiveKey="first">
											<Nav.Item><Nav.Link as="li" eventKey="first">Recent Chat</Nav.Link></Nav.Item>
											<Nav.Item><Nav.Link as="li" eventKey='second'>Groups</Nav.Link></Nav.Item>
											<Nav.Item><Nav.Link as="li" eventKey='third'>Calls</Nav.Link></Nav.Item>
										</Nav>
									
										<div>
										<Scrollbar style={{ height: 800 }}>
												<div className="main-chat-list" id="ChatList">
													{charts.map((chart)=>(
													<div className="media new main-contact-item" key={Math.random()}>
														<div className="main-img-user online">
															<img alt="" src={chart.src1} />{chart.data}
														</div>
														<div className="media-body">
															<div className="media-contact-name">
																<span>{chart.heading}</span> <span>{chart.class}</span>
															</div>
															<p>Nam quam nunc, blandit vel aecenas et ante tincid</p>
														</div>
													</div>
													))}
												</div>
											</Scrollbar>
										</div>
									</div>
								</div>
							</Card>
						</Col>
						<Col lg={12} xl={6} xxl={6} className="">
							<Card>
								<div className="">
									<Link className="main-header-arrow" to="#" id="ChatBodyHide"
									onClick={() => {
										document.body.classList.remove("main-content-body-show")
									}}><i className="icon ion-md-arrow-back"></i></Link>
									<div className="main-content-body main-content-body-chat">
										<div className="main-chat-header">
											<div className="main-img-user"><img alt="" src={Imagesdata("faces9")} /></div>
											<div className="main-chat-msg-name">
												<h6>Reynante Labares</h6><small>Last seen: 2 minutes ago</small>
											</div>
											<Nav className="">
												<Nav.Link eventKey="/home"><i className="icon ion-md-more"></i></Nav.Link>
												<Nav.Link eventKey="link-1"><OverlayTrigger placement="top" overlay={<Tooltip>Call</Tooltip>}><i className="fe fe-phone"></i></OverlayTrigger></Nav.Link>
												<Nav.Link eventKey="link-2"><OverlayTrigger placement="top" overlay={<Tooltip>Trash</Tooltip>}><i className="fe fe-trash"></i></OverlayTrigger></Nav.Link>
												<Nav.Link eventKey="disabled"><OverlayTrigger placement="top" overlay={<Tooltip>View Info</Tooltip>}><i className="fe fe-alert-circle"></i></OverlayTrigger></Nav.Link>
											</Nav>
										</div>
										<div className="main-chat-body" id="ChatBody">
										<Scrollbar style={{ height: 800 }}>
												<div className="content-inner">
													<label className="main-chat-time"><span>3 days ago</span></label>
													<div className="media flex-row-reverse">
														<div className="main-img-user online"><img alt="" src={Imagesdata("faces9")} /></div>
														<div className="media-body">
															<div className="main-msg-wrapper right">
																Nulla consequat massa quis enim. Donec pede justo, fringilla vel...
															</div>
															<div className="main-msg-wrapper right">
																rhoncus ut, imperdiet a, venenatis vitae, justo...
															</div>
															<div className="main-msg-wrapper p-0"><img alt="" className="wd-100 ht-100 rounded-5" src={Imagesdata("Ecom1")} /></div>
															<div>
																<span>9:48 am</span> <Link to="#"><i className="icon ion-android-more-horizontal"></i></Link>
															</div>
														</div>
													</div>
													<div className="media">
														<div className="main-img-user online"><img alt="" src={Imagesdata("faces6")} /></div>
														<div className="media-body">
															<div className="main-msg-wrapper left">
																Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
															</div>
															<div>
																<span>9:32 am</span> <Link to="#"><i className="icon ion-android-more-horizontal"></i></Link>
															</div>
														</div>
													</div>
													<div className="media flex-row-reverse">
														<div className="main-img-user online"><img alt="" src={Imagesdata("faces9")} /></div>
														<div className="media-body">
															<div className="main-msg-wrapper right">
																Nullam dictum felis eu pede mollis pretium
															</div>
															<div>
																<span>11:22 am</span> <Link to="#"><i className="icon ion-android-more-horizontal"></i></Link>
															</div>
														</div>
													</div><label className="main-chat-time"><span>Yesterday</span></label>
													<div className="media">
														<div className="main-img-user online"><img alt="" src={Imagesdata("faces6")} /></div>
														<div className="media-body">
															<div className="main-msg-wrapper left">
																Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
															</div>
															<div>
																<span>9:32 am</span> <Link to="#"><i className="icon ion-android-more-horizontal"></i></Link>
															</div>
														</div>
													</div>
													<div className="media flex-row-reverse">
														<div className="main-img-user online"><img alt="" src={Imagesdata("faces9")} /></div>
														<div className="media-body">
															<div className="main-msg-wrapper right">
																Donec quam felis, ultricies nec, pellentesque euerdiet a, venenatis vitae, justo.
															</div>
															<div className="main-msg-wrapper right">
																Nullam dictum felis eu pede mollis pretium
															</div>
															<div>
																<span>9:48 am</span> <Link to="#"><i className="icon ion-android-more-horizontal"></i></Link>
															</div>
														</div>
													</div><label className="main-chat-time"><span>Today</span></label>
													<div className="media">
														<div className="main-img-user online"><img alt="" src={Imagesdata("faces6")} /></div>
														<div className="media-body">
															<div className="main-msg-wrapper left">
																Maecenas tempus, tellus eget condimentum rhoncus
															</div>
															<div className="main-msg-wrapper left">
																Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.
															</div>
															<div>
																<span>10:12 am</span> <Link to="#"><i className="icon ion-android-more-horizontal"></i></Link>
															</div>
														</div>
													</div>
													<div className="media flex-row-reverse">
														<div className="main-img-user online"><img alt="" src={Imagesdata("faces9")} /></div>
														<div className="media-body">
															<div className="main-msg-wrapper right">
																Maecenas tempus, tellus eget condimentum rhoncus
															</div>
															<div className="main-msg-wrapper right">
																Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.
															</div>
															<div>
																<span>09:40 am</span> <Link to="#"><i className="icon ion-android-more-horizontal"></i></Link>
															</div>
														</div>
													</div>
												</div>
											</Scrollbar>
										</div>
										<div className="main-chat-footer">
											<Form.Control className="" placeholder="Type your message here..." type="text" />
											<Link className="nav-link me-2" to="#"><OverlayTrigger placement="top" overlay={<Tooltip>Add Emoticons</Tooltip>}><i className="fe fe-paperclip"></i></OverlayTrigger></Link>
											<Link className="main-msg-send" to="#"><i className="fe fe-send"></i></Link>
										</div>
									</div>
								</div>
							</Card>
						</Col>
						<Col lg={12} xl={12} xxl={3} className="">
							<Card className="overflow-hidden">
								<div className="">
									<Card.Body className="p-0 chat-main">
										<Dropdown className="chat-profile-dropdown float-end m-4">
											<Dropdown.Toggle as='a' variant="" className="option-dots text-dark no-caret" id="dropdown-basic"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
											<Dropdown.Menu>
												<Dropdown.Item href="#"><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
												<Dropdown.Item href="#"><i className="fe fe-share me-2"></i> Share</Dropdown.Item>
												<Dropdown.Item href="#"><i className="fe fe-trash me-2"></i> Delete</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
										<div className="text-center border-bottom chat-image p-4 pb-0 mb-4 rounded-5 mt-3">
											<div className="main-img-user avatar-xl main-avatar online mb-3 mx-auto">
												<Link className="" to={`${import.meta.env.BASE_URL}pages/profile`}><img alt="avatar" className="rounded-circle" src={Imagesdata("faces2")} /></Link>
											</div>
											<Link to={`${import.meta.env.BASE_URL}pages/profile`}><h5 className="mb-1 text-dark">Ryan Gracie</h5></Link>
											<p className="text-muted mt-0 mb-1 pt-0 tx-13">Senior Web Designer</p>
											<p className="text-muted mt-0 pt-0 tx-13 mb-0">+123(45)-678-90</p>
										</div>
										<div className="">
											<div className="px-4">
												<h6 className="mb-3">Contact Details :</h6>
												<div className="d-flex">
													<div>
														<Link className="nav-link border rounded-pill chat-profile me-2" to="#"><i className="fe fe-shield"></i></Link>
													</div>
													<div className="ms-2">
														<p className="tx-13 font-weight-semibold mb-0">Id</p>
														<p className="tx-12 text-muted">2E345D4.</p>
													</div>
												</div>
												<div className="d-flex">
													<div>
														<Link className="nav-link border rounded-pill chat-profile me-2" to="#"><i className="fe fe-mail"></i></Link>
													</div>
													<div className="ms-2">
														<p className="tx-13 font-weight-semibold mb-0">Email</p>
														<p className="tx-12 text-muted">ryangracie435@gmail.com.</p>
													</div>
												</div>
												<div className="d-flex mt-2">
													<div>
														<Link className="nav-link border rounded-pill chat-profile me-2" to="#"><i className="fe fe-map-pin"></i></Link>
													</div>
													<div className="ms-2">
														<p className="tx-13 font-weight-semibold mb-0">Address</p>
														<p className="tx-12 text-muted">2nd street,houston texas,united states.</p>
													</div>
												</div>
											</div>
											<div className="px-4">
												<h6 className="mb-0">Shared Files :</h6>
												<Card className="custom-card overflow-hidden border-0 bg-transparent">
													<Card.Body className="pb-0 ps-0">
														<div className="border-0 p-0 mb-4">
															<div className="media mt-0">
																<div className="ps-0 me-3"><i className="fa fa-folder-open shared-files text-muted"></i></div>
																<div className="media-body">
																	<div className="d-flex align-items-center">
																		<div className="mt-0">
																			<h5 className="mb-1 tx-13 font-weight-sembold text-dark"> Ex Document</h5>
																			<p className="mb-0 tx-13 text-muted">ppt<span className="tx-11 ms-2">1.2 mb</span></p>
																		</div>
																		<span className="ms-auto wd-45p fs-16 ">
																			<span id="spark1" className="wd-100p"></span>
																			<span className="float-end badge">
																				<span className="op-7 text-muted font-weight-semibold">4 hrs ago </span>
																			</span>
																		</span>
																	</div>
																</div>
															</div>
														</div>
														<div className="border-0 p-0 mb-4">
															<div className="media mt-0">
																<div className="ps-0 me-3"><i className="fa fa-image shared-files text-muted"></i></div>
																<div className="media-body">
																	<div className="d-flex align-items-center">
																		<div className="mt-0">
																			<h5 className="mb-1 tx-13 font-weight-sembold text-dark">Sam Photo</h5>
																			<p className="mb-0 tx-13 text-muted">img<span className="tx-11 ms-2">12 mb</span></p>
																		</div>
																		<span className="ms-auto wd-45p fs-16 ">
																			<span id="spark2" className="wd-100p"></span>
																			<span className="float-end badge">
																				<span className="op-7 text-muted font-weight-semibold">4 hrs ago </span>
																			</span>
																		</span>
																	</div>
																</div>
															</div>
														</div>
														<div className="border-0 p-0 mb-0">
															<div className="media mt-0">
																<div className="ps-0 me-3"><i className="fa fa-envelope shared-files text-muted"></i></div>
																<div className="media-body">
																	<div className="d-flex align-items-center">
																		<div className="mt-0">
																			<h5 className="mb-1 tx-13 font-weight-sembold text-dark"> video</h5>
																			<p className="mb-0 tx-13 text-muted">Video<span className="tx-12 ms-2">16 mb</span></p>
																		</div>
																		<span className="ms-auto wd-45p fs-16 ">
																			<span id="spark3" className="wd-100p"></span>
																			<span className="float-end badge">
																				<span className="op-7 text-muted font-weight-semibold">22 mins ago </span>
																			</span>
																		</span>
																	</div>
																</div>
															</div>
														</div>
													</Card.Body>
												</Card>
											</div>
										</div>
									</Card.Body>
								</div>
							</Card>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	)
};

Chat.propTypes = {};

Chat.defaultProps = {};

export default Chat;
