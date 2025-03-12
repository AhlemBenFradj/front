import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../layouts/layoutcomponents/pageheader';
import { Imagesdata } from '../../../common/commonimages';
import { avatar, initial, rounded } from '../../../common/commondata';
const Avatar = () => {
	return (
		<div>
			<Pageheader titles="Elements" active="Avatar" />
			<Row>
				<Col lg={12} md={12}>
					<Card className="custom-card" id="sizes">
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">Avatar Sizes</Card.Title>
								<Card.Subtitle as='p' className="text-muted mb-3">An avatar can have different sizes like larger
									and smaller avatar.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">

									<div className="demo-avatar-group d-sm-flex d-block" >
										{avatar.map((avatars) => (
											<div className={`main-img-user ${avatars.class}`} key={Math.random()}>
												<img alt="avatar" className="rounded-circle"
													src={avatars.src1} />
											</div>
										))}
									</div>

								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={12} md={12}>
					<Card className="custom-card" id="shapes">
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">Avatar Shapes</Card.Title>
								<Card.Subtitle as='p' className="text-muted mb-3">An avatar can have different shapes like square
									and round, radius avatars.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="demo-avatar-group">
										<div className="main-img-user avatar-md">
											<img alt="avatar" className="rounded-circle"
												src={Imagesdata("faces4")} />
										</div>
										<div className="main-img-user avatar-md">
											<img alt="avatar" className="square" src={Imagesdata("faces5")} />
										</div>
										<div className="main-img-user avatar-md">
											<img alt="avatar" className="radius" src={Imagesdata("faces6")} />
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>


				<Col lg={12} md={12}>
					<Card className="custom-card" id="initials">
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">Initials Avatars</Card.Title>
								<Card.Subtitle as='p' className="text-muted mb-3">An avatar can have a temporary use of user's
									initial name while their photos are not yet available.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="demo-avatar-group d-sm-flex d-block avatar-list">
										{initial.map((initials) => (
											<div className={`avatar ${initials.class1} mb-sm-0 mb-1 bg-${initials.color} rounded-circle`} key={Math.random()}>
												{initials.class}
											</div>
										))}
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
					<Card className="custom-card" id="status">
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">Status Indicator</Card.Title>
								<Card.Subtitle as='p' className="text-muted mb-3">An avatar can have a status indicator to
									indicate users availability.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="demo-avatar-group">
										<div className="main-avatar avatar online">
											<img alt="avatar" className="rounded-circle avatar"
												src={Imagesdata("faces9")} />
										</div>
										<div className="main-avatar avatar-md offline">
											eb
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={12} md={12}>
					<Card className="custom-card">
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">Avatars with numbers</Card.Title>
								<Card.Subtitle as='p' className="text-muted mb-3">Avatars that show number badges.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="additional-avatars">
									<div className="demo-avatar-group">
										<div className="demo-avatar-group">
											<div className="main-img-user1 avatar-sm me-4">
												<img alt="avatar" className="rounded-circle" src={Imagesdata("faces2")} />
												<span className="badge rounded-pill bg-primary number-badge">2</span>
											</div>
											<div className="main-img-user1 avatar-md me-4">
												<img alt="avatar" className="rounded-circle" src={Imagesdata("faces1")} />
												<span className="badge rounded-pill bg-secondary number-badge">11</span>
											</div>
											<div className="main-img-user1 avatar-lg">
												<img alt="avatar" className="rounded-circle" src={Imagesdata("faces11")} />
												<span className="badge rounded-pill bg-success number-badge">3</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12} md={12}>
					<Card className="custom-card">
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">Avatars with icons</Card.Title>
								<Card.Subtitle as='p' className="text-muted mb-3">Avatars that show icon badges.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="additional-avatars">
									<div className="demo-avatar-group">
										<div className="demo-avatar-group">
											<div className="main-img-user3 avatar-sm me-4">
												<img alt="avatar" className="rounded-circle" src={Imagesdata("faces2")} />
												<span className="badge rounded-pill bg-primary icon-badgeavatar"><i className="fe fe-plus"></i></span>
											</div>
											<div className="main-img-user3 avatar-md me-4">
												<img alt="avatar" className="rounded-circle" src={Imagesdata("faces1")} />
												<span className="badge rounded-pill bg-secondary icon-badgeavatar"><i className="fe fe-edit"></i></span>
											</div>
											<div className="main-img-user3 avatar-lg">
												<img alt="avatar" className="rounded-circle" src={Imagesdata("faces11")} />
												<span className="badge rounded-pill bg-success icon-badgeavatar"><i className="fe fe-delete"></i></span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12} md={12}>
					<Card className="custom-card">
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">Stacked Avatars in Numbers</Card.Title>
								<Card.Subtitle as='p' className="text-muted mb-3">Group of avatars stacked together with number representation.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="avatar-list avatar-list-stacked">
									{rounded.map((roundeds) => (
										<span className="avatar1 brround" key={Math.random()} ><img alt="" className="rounded-circle" src={roundeds.src1} /></span>
									))}
									<span className="avatar1 brround">+8</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12} md={12}>
					<Card className="custom-card">
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">Stacked Avatars in Numbers</Card.Title>
								<Card.Subtitle as='p' className="text-muted mb-3">Avatars that show icon badges.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="avatar-list avatar-list-stacked">
									{rounded.map((roundeds) => (
										<span className="avatar1 brround"  key={Math.random()}><img alt="" className="rounded-circle" src={roundeds.src1} /></span>
									))}
									<span className="avatar1 brround"><i className="fe fe-plus"></i></span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	)
};

Avatar.propTypes = {};

Avatar.defaultProps = {};

export default Avatar;
