import React from 'react';
import { Button, Card, Col, Row, Badge } from 'react-bootstrap';
import Pageheader from '../../../layouts/layoutcomponents/pageheader';
import { badge, badge1, badge2, colorbadge, linkbadge } from '../../../common/commondata';
const Badges = () => (
	<div>
		<Pageheader titles="Elements" active="Badge" />
		<Row>
			<Col lg={12} md={12}>
				<Card className="mg-b-20">
					<Card.Body>
						<Card.Title as='h3' className="mg-b-10">Buttons with square Badges</Card.Title>
						<Card.Subtitle as='p' className="mg-b-20 text-muted ">Below exapmle badges are button badges.</Card.Subtitle>
						<div className="text-wrap">
							<div className="example">
								{badge.map((badges) => (
									<Button variant={badges.color} className="mt-1 mb-1 me-3" key={Math.random()}>
										<span>Notifications</span>
										<Badge bg='white' className="ms-1">{badges.data}</Badge>
									</Button>
								))}
							</div>
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
		<Row>
			<Col lg={12} md={12}>
				<Card className="mg-b-20">
					<Card.Body>
						<Card.Title as='h3' className="mg-b-10">Border buttons with square Badges</Card.Title>
						<Card.Subtitle as='p' className="mg-b-20 text-muted ">Below exapmle badges are Border buttons badges..</Card.Subtitle>
						<div className="text-wrap">
							<div className="example">
								{badge1.map((badge) => (
									<Button variant={`outline-${badge.color}`} className="mt-1 mb-1 me-3" key={Math.random()}>
										<span>Notifications</span>
										<Badge bg={badge.color} className="ms-1">{badge.data}</Badge>
									</Button>
								))}
							</div>
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
		<Row>
			<Col lg={12} md={12}>
				<Card className="mg-b-20">
					<Card.Body>
						<Card.Title as='h3' className="mg-b-10">Buttons with rounded Badges</Card.Title>
						<Card.Subtitle as='p' className="mg-b-20 text-muted ">Below exapmle badges are  button rounded badges...</Card.Subtitle>
						<div className="text-wrap">
							<div className="example">
								{badge2.map((badges2) => (
									<Button variant={badges2.color} className="mt-1 mb-1 me-3" key={Math.random()}>
										<span>Notifications</span>
										<Badge bg='white' className="rounded-pill ms-1">{badges2.data}</Badge>
									</Button>
								))}
							</div>
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
		<Row>
			<Col lg={12} md={12}>
				<Card className="mg-b-20">
					<Card.Body>
						<Card.Title as='h3' className="mg-b-10">Border buttons with rounded Badges</Card.Title>
						<Card.Subtitle as='p' className="mg-b-20 text-muted ">Below exapmle badges are border  button rounded badges...</Card.Subtitle>
						<div className="text-wrap">
							<div className="example">
								<Button variant='outline-primary' className="mt-1 mb-1 me-3">
									<span>Notifications</span>
									<Badge bg='primary' className="rounded-pill ms-1">2</Badge>
								</Button>
								<Button variant='outline-success' className="mt-1 mb-1 me-3">
									<span>Notifications</span>
									<Badge bg='success' className="rounded-pill ms-1">65</Badge>
								</Button>
								<Button variant='outline-secondary' className="mt-1 mb-1 me-3">
									<span>Notifications</span>
									<Badge bg='secondary' className="rounded-pill ms-1">43</Badge>
								</Button>
								<Button variant='outline-info' className="mt-1 mb-1 me-3">
									<span>Notifications</span>
									<Badge bg='info' className="rounded-pill ms-1">563</Badge>
								</Button>
							</div>
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
		<Row>
			<Col lg={12} md={12}>
				<Card className="mg-b-20">
					<Card.Body>
						<Card.Title as='h3' className="mg-b-10">Link Badges</Card.Title>
						<Card.Subtitle as='p' className="mg-b-20 text-muted ">Badges can be used as part of links or buttons to provide a counter.</Card.Subtitle>
						<div className="text-wrap">
							<div className="example">
								<Button variant='primary' className="mt-1 mb-1 me-3">Primary <Badge bg='light' className="ms-1">22</Badge></Button>
								<Button variant='success' className="mt-1 mb-1 me-3">Success <Badge bg='light' className=" ms-1">New</Badge></Button>
								<Button variant='info' className="mt-1 mb-1 me-3">Info <Badge bg='light' className=" ms-1">5</Badge></Button>
								<Button variant='warning' className="mt-1 mb-1 me-3">Warning <Badge bg='light' className="badge-pill  ms-1"><i className="fe fe-plus-circle tx-14"></i></Badge></Button>
								<Button variant='danger' className="mt-1 mb-1 me-3">Danger <Badge bg='light' className="badge-pill  ms-1">Updated</Badge></Button>
							</div>
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>

		<Row>
			<Col lg={12} md={12}>
				<Card className="mg-b-20">
					<Card.Body>
						<Card.Title as='h3' className="mg-b-10">Link Badges</Card.Title>
						<Card.Subtitle as='p' className="mg-b-20 text-muted ">Badges can be used as part of links or buttons to provide a counter.</Card.Subtitle>
						<div className="text-wrap">
							<div className="example">
								{linkbadge.map((linkbadges) => (
									<Button variant={linkbadges.color} className="position-relative  mb-2 mt-2 badge-top-pill" key={Math.random()}>
										Inbox
										<Badge bg={linkbadges.color1} className="position-absolute start-100 translate-middle rounded-pill">
											{linkbadges.data}
											<span className="visually-hidden">unread messages</span>
										</Badge>
									</Button>
								))}
							</div>
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
		<Row>
			<Col lg={6} md={6}>
				<Card className="mg-b-20" id="badge">
					<Card.Body>
						<Card.Title as='h3' className="mg-b-10">Simple Badges</Card.Title>
						<Card.Subtitle as='p' className="mg-b-20 text-muted ">Badges scale to match the size of the immediate parent element by using relative font sizing and em units...</Card.Subtitle>
						<div className="text-wrap">
							<div className="example">
								<h1>Heading 1 <Badge bg='light'>New</Badge></h1>
								<h2>Heading 2 <Badge bg='light'>New</Badge></h2>
								<h3>Heading 3 <Badge bg='light'>New</Badge></h3>
								<h4>Heading 4 <Badge bg='light'>New</Badge></h4>
								<h5>Heading 5 <Badge bg='light'>New</Badge></h5>
								<h6>Heading 6 <Badge bg='light'>New</Badge></h6>
							</div>
						</div>
					</Card.Body>
				</Card>
			</Col>
			<Col lg={6} md={6}>
				<Card className="mg-b-20" id="badge1">
					<Card.Body>
						<Card.Title as='h3' className="mg-b-10">Colored Badges</Card.Title>
						<Card.Subtitle as='p' className="mg-b-20 text-muted ">Badges scale to match the size of the immediate parent element by using relative font sizing and em units...</Card.Subtitle>
						<div className="text-wrap">
							<div className="example">
								<h1 className="text-primary">Heading 1 <Badge bg='primary'>New</Badge></h1>
								<h2 className="text-danger">Heading 2 <Badge bg='danger'>New</Badge></h2>
								<h3 className="text-warning">Heading 3 <Badge bg='warning'>New</Badge></h3>
								<h4 className="text-success">Heading 4 <Badge bg='success'>New</Badge></h4>
								<h5 className="text-info">Heading 5 <Badge bg='info'>New</Badge></h5>
								<h6 className="text-secondary">Heading 6 <Badge bg='secondary'>New</Badge></h6>
							</div>
						</div>
					</Card.Body>
				</Card>
			</Col>

			<Col lg={12} md={12}>
				<Card className="mg-b-20" id="badge2">
					<Card.Body>
						<Card.Title as='h3' className="mg-b-10">BADGES</Card.Title>
						<Card.Subtitle as='p' className="mg-b-20 text-muted ">Badges scale to match the size of the immediate parent element by using relative font sizing and em units...</Card.Subtitle>
						<div className="text-wrap">
							<div className="example">
								{colorbadge.map((colorbadges) => (
									<Badge key={Math.random()} bg={colorbadges.color} className="me-1 my-2">{colorbadges.class}</Badge>

								))}
							</div>
						</div>
					</Card.Body>
				</Card>
			</Col>

			<Col lg={12} md={12}>
				<Card className="mg-b-20" id="badge3">
					<Card.Body>
						<Card.Title as='h3' className="mg-b-10">Pill Badges</Card.Title>
						<Card.Subtitle as='p' className="mg-b-20 text-muted ">Use the <code>.badge-pill</code> modifier className to make badges more rounded.</Card.Subtitle>
						<div className="text-wrap">
							<div className="example">
								{colorbadge.map((colorbadges) => (
									<Badge key={Math.random()} bg={colorbadges.color} className="badge-pill me-1 my-2">{colorbadges.class}</Badge>

								))}
							</div>
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	</div>
);

Badge.propTypes = {};

Badge.defaultProps = {};

export default Badges;
