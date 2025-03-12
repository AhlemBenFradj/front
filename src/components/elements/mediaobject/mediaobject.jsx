import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../layouts/layoutcomponents/pageheader';
import { Imagesdata } from '../../../common/commonimages';

const MediaObject = () => {

	return (

		<div>
			<Pageheader titles="Elements" active="Media-object" />
			<Row>
				<Col xl={12} lg={12}>
					<Card className="" id="media-object">
						<Card.Body className="">
							<div>
								<Card.Title as='h6' className="mb-1">Basic Example</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">It is Very Easy to Customize and it uses in
									your website apllication.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="media d-block d-sm-flex">
										<img alt="" className="main-img-user avatar-lg mg-sm-r-20 mg-b-20 mg-sm-b-0"
											src={Imagesdata("faces4")} />
										<div className="media-body">
											<h5 className="mg-b-5 tx-inverse tx-15">Media heading</h5>
											Lorem Ipsum generators on the Internet as necessary aut odit aut fugit,
											sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
											nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
											amet, consectetur, adipisci velit
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>

					<Card className="" id="media-object2">
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">Nesting</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">It is Very Easy to Customize and it uses in
									your website apllication.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="media d-block d-sm-flex">
										<img alt="" className="main-img-user avatar-lg mg-sm-r-20 mg-b-20 mg-sm-b-0"
											src={Imagesdata("faces9")} />
										<div className="media-body">
											<h5 className="mg-b-5 tx-inverse tx-15">Media heading</h5>
											<p>Lorem Ipsum generators on the Internet as necessary aut odit aut
												fugit, sed quia consequuntur magni dolores eos qui ratione
												voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
												ipsum quia dolor sit amet, consectetur, adipisci velit</p>
											<div className="media d-block d-sm-flex mg-t-25">
												<img alt=""
													className="main-img-user avatar-lg mg-sm-r-20 mg-b-20 mg-sm-b-0"
													src={Imagesdata("faces8")} />
												<div className="media-body">
													<h5 className="mg-b-5 tx-inverse tx-15">Media heading</h5>
													Lorem Ipsum generators on the Internet as necessary aut odit aut
													fugit, sed quia consequuntur magni dolores eos qui ratione
													voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
													ipsum quia dolor sit amet, consectetur, adipisci velit
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>

					<Card className="" id="media-object3">
						<Card.Body className="">
							<div>
								<Card.Title as='h6' className="mb-1">Alignment</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">It is Very Easy to Customize and it uses in
									your website apllication.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="media d-block d-sm-flex">
										<img alt=""
											className="main-img-user avatar-lg mg-sm-r-20 mg-b-20 mg-sm-b-0 align-self-center"
											src={Imagesdata("faces14")} />
										<div className="media-body">
											<h5 className="mg-b-5 tx-inverse tx-15">Media heading</h5>
											Lorem Ipsum generators on the Internet as necessary aut odit aut fugit,
											sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
											nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
											amet, consectetur, adipisci velit Lorem Ipsum generators on the Internet
											as necessary aut odit aut fugit, sed quia consequuntur magni dolores eos
											qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
											dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>

					<Card className="" id="media-object4">
						<Card.Body className="">
							<div>
								<Card.Title as='h6' className="mb-1">Order</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">It is Very Easy to Customize and it uses in
									your website apllication.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="media d-block d-sm-flex">
										<div className="media-body">
											<h5 className="mg-b-5 tx-inverse tx-15">Media heading</h5>
											Lorem Ipsum generators on the Internet as necessary aut odit aut fugit,
											sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
											nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
											amet, consectetur, adipisci velit
										</div>
										<img alt="" className="main-img-user avatar-lg mg-sm-l-20 mg-t-20 mg-sm-t-0"
											src={Imagesdata("faces5")} />
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>

					<Card className="" id="media-object5">
						<Card.Body className="">
							<div>
								<Card.Title as='h6' className="mb-1">Media List</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">It is Very Easy to Customize and it uses in
									your website apllication.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="media media-list d-block d-sm-flex">
										<ul className="list-unstyled mb-0">
											<li className="media d-block d-sm-flex">
												<img alt=""
													className="main-img-user avatar-lg mg-sm-r-20 mg-b-20 mg-sm-b-0"
													src={Imagesdata("faces2")} />
												<div className="media-body">
													<h5 className="mg-b-5 tx-inverse tx-15">Media heading</h5>
													Lorem Ipsum generators on the Internet as necessary aut odit aut
													fugit, sed quia consequuntur magni dolores eos qui ratione
													voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
													ipsum quia dolor sit amet, consectetur, adipisci velit
												</div>
											</li>
											<li className="media d-block d-sm-flex mg-t-25">
												<img alt=""
													className="main-img-user avatar-lg mg-sm-r-20 mg-b-20 mg-sm-b-0"
													src={Imagesdata("faces12")} />
												<div className="media-body">
													<h5 className="mg-b-5 tx-inverse tx-15">Media heading</h5>
													Lorem Ipsum generators on the Internet as necessary aut odit aut
													fugit, sed quia consequuntur magni dolores eos qui ratione
													voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
													ipsum quia dolor sit amet, consectetur, adipisci velit
												</div>
											</li>
											<li className="media d-block d-sm-flex mg-t-25">
												<img alt=""
													className="main-img-user avatar-lg mg-sm-r-20 mg-b-20 mg-sm-b-0"
													src={Imagesdata("faces7")} />
												<div className="media-body">
													<h5 className="mg-b-5 tx-inverse tx-15">Media heading</h5>
													Lorem Ipsum generators on the Internet as necessary aut odit aut
													fugit, sed quia consequuntur magni dolores eos qui ratione
													voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
													ipsum quia dolor sit amet, consectetur, adipisci velit
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	)
};

MediaObject.propTypes = {};

MediaObject.defaultProps = {};

export default MediaObject;
