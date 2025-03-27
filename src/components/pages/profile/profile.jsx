import React from 'react';
import { Button, Container, Col, Dropdown, Form, Nav, ProgressBar, Row, Tab, Modal } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Imagesdata } from '../../../common/commonimages';

function Profile() {
	const [show, setShow] = React.useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Launch Profile Modal
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Profile</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Container className="p-0">
						<Row>
							<Col md={5} lg={5} xl={9} className="mx-auto">
								<div className="card-sigin">
									<div className="main-signup-header">
										<Form action="#">
											<Form.Group>
												<Form.Label className="mb-2">Email</Form.Label>
												<Form.Control className="mb-3" placeholder="Enter your email" type="text" />
											</Form.Group>
											<Form.Group>
												<Form.Label className="mb-2">Password</Form.Label>
												<Form.Control className="mb-3" placeholder="Enter your password" type="password" />
											</Form.Group>
											<Button className="btn-main-primary btn-block">Sign In</Button>
										</Form>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;

