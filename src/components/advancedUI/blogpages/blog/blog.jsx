import React from 'react';
import Pageheader from '../../../../layouts/layoutcomponents/pageheader';
import { Row, Col, Card, Pagination, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Imagesdata } from '../../../../common/commonimages';
import { blog, blogdata, blogauthor } from '../../../../common/commondata';

const Blog = () => {
	return (
		<div>
			<Pageheader titles="Blog" active="Blog" />
			<Row>
				<Col xxl={6} xl={12} lg={12} md={12}>
					<Card className="overflow-hidden">
						<Link to={`${import.meta.env.BASE_URL}advancedui/blogpages/blogdetails/`} className="card custom-card card-img-top-1 background-image-blog mb-0">
							<img src={Imagesdata("photos27")} />
						</Link>
						<Card.Body>
							<Link to="#" className="mt-4"><h4 className="font-weight-semibold text-dark">Best Place To visit For a Holiday idea of denouncing pleasure?</h4></Link>
							<p className="mb-0 mt-3">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.</p>

						</Card.Body>
						<Card.Footer>
							<div className="item7-card-desc d-sm-flex mt-0">
								<Link to="#" className="d-flex"><span className="fe fe-user text-muted me-2 tx-17"></span><div className="mt-0 mt-0  font-weight-semibold text-muted">Anna Ogden</div></Link>
								<div className="d-flex ms-auto">
									<Link to="#" className="d-flex me-3"><span className="fe fe-calendar text-muted me-2 tx-17"></span><div className="mt-0 mt-0  font-weight-semibold text-muted">Jan-18-2020</div></Link>
									<Link className="me-0 d-flex" to="#"><span className="fe fe-message-square text-muted me-2 tx-17"></span><div className="mt-0 mt-0  font-weight-semibold text-muted">12 Comments</div></Link>
								</div>
							</div>
						</Card.Footer>
					</Card>
				</Col>
				<Col xxl={3} xl={6} lg={6} sm={6}>
					<Card className="custom-card card-img-top-1">
						<Link to={`${import.meta.env.BASE_URL}advancedui/blogpages/blogdetails/`}><img className="card-img-top w-100 w-100" src={Imagesdata("photos11")} alt="" /></Link>
						<Card.Body className="pb-0">
							<Link to={`${import.meta.env.BASE_URL}advancedui/blogpages/blogdetails/`}><Card.Title as='h4'>10 Ways To Immediately Start Selling Products !</Card.Title></Link>
							<p className="mb-2">Those who do not know how  pursues or desires to  occur in which toil and pain can procure him some great pleasure. To take a trivial example  pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-buil .the great explorer of the truth, the master-buil</p>
						</Card.Body>
						<div className="item7-card-desc d-flex p-3 pt-0 align-items-center justify-content-center border-top">
							<div className="main-img-user online">
								<img alt="avatar" src={Imagesdata("faces9")} />
							</div>
							<div className="main-contact-body">
								<h6>Jiggel mossin</h6>
							</div>
							<div className="ms-auto">
								<Link className="me-0 d-flex" to="#"><span className="phone font-weight-semibold text-muted"><span className="fe fe-calendar text-muted me-2 tx-16"></span>Aug 01,2021</span></Link>
							</div>
						</div>
					</Card>
				</Col>
				<Col xxl={3} xl={6} lg={6} sm={6}>
					<Card>
						<Card.Header className="pb-0">
							<Card.Title as='h3'>Latest Posts</Card.Title>
						</Card.Header>
						<Card.Body className="pt-1">
							<div className="list-catergory1">
								<div className="item-list">
									<ListGroup className="mb-0">
										{blog.map((blogs) => (
											<ListGroup.Item className="d-flex  border-bottom-0" key={Math.random()}>
												<img src={blogs.src} className="avatar rounded-5 avatar-lg me-3 my-auto" alt="avatar-img" />
												<div className="my-auto">
													<span className="d-block h6 text-dark">{blogs.class}</span>
													<Link to="#" className="text-default ">{blogs.data}</Link>
													<small className="d-block text-muted">{blogs.text}</small>
												</div>
											</ListGroup.Item>
										))}
									</ListGroup>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				{blogdata.map((blogdatas) => (
					<Col xxl={3} xl={6} lg={6} sm={6} key={Math.random()}>
						<Card className="custom-card card-img-top-1">
							<Link to={`${import.meta.env.BASE_URL}advancedui/blogpages/blogdetails/`}><img className="card-img-top w-100 w-100" src={blogdatas.src} alt="" /></Link>
							<Card.Body className="pb-0">
								<Link to={`${import.meta.env.BASE_URL}advancedui/blogpages/blogdetails/`}><Card.Title as='h4'>{blogdatas.class}</Card.Title></Link>
								<Card.Text className="mb-2">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Text>
							</Card.Body>
							<div className="item7-card-desc d-flex p-3 pt-0 align-items-center justify-content-center border-top">
								<div className="main-img-user online">
									<img alt="avatar" src={blogdatas.src1} />
								</div>
								<div className="main-contact-body">
									<h6>{blogdatas.name}</h6>
								</div>
								<div className="ms-auto">
									<Link className="me-0 d-flex" to="#"><span className="phone font-weight-semibold text-muted"><span className="fe fe-calendar text-muted me-2 tx-16"></span>{blogdatas.date}</span></Link>
								</div>
							</div>
						</Card>
					</Col>
				))}
				<Col xxl={3} xl={6} lg={6} sm={6}>
					<Card className="overflow-hidden">
						<Card.Header className="pb-1">
							<Card.Title as='h3' className="mb-2">Blog AUthors</Card.Title>
						</Card.Header>
						<Card.Body className="p-0 customers mt-1">
							<ListGroup className="list-lg-group list-group-flush">
								{blogauthor.map((blogauthors) => (
									<Link to="#" className="border-0" key={Math.random()}>
										<ListGroup.Item className="list-group-item-action">
											<div className="media mt-0">
												<img className="avatar-lg rounded-circle me-3 my-auto" src={blogauthors.src} alt="Image description" />
												<div className="media-body">
													<div className="d-flex align-items-center">
														<div className="mt-0">
															<h5 className="mb-1 tx-13 font-weight-sembold text-dark">{blogauthors.class}</h5>
															<p className="mb-0 tx-13 text-muted">User ID: #1234</p>
														</div>
														<span className="ms-auto wd-45p fs-16 ">
															<span id="spark1" className="wd-100p"></span>
															<span className="float-end badge">
																<span className={`op-7 text-${blogauthors.color} font-weight-semibold`}>{blogauthors.text}</span>
															</span>
														</span>
													</div>
												</div>
											</div>
										</ListGroup.Item>
									</Link>
								))}
							</ListGroup>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Pagination className="product-pagination ms-auto float-end">
				<Pagination.Prev className="page-item disabled" />
				<Pagination.Item className="page-item active">1</Pagination.Item>
				<Pagination.Item className="page-item">2</Pagination.Item>
				<Pagination.Item className="page-item">3</Pagination.Item>
				<Pagination.Item className="page-item">4</Pagination.Item>
				<Pagination.Next className="page-item" />
			</Pagination>
		</div>
	)
};
Blog.propTypes = {};

Blog.defaultProps = {};

export default Blog;
