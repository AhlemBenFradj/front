import React, { useState } from "react";
import Pageheader from '../../../layouts/layoutcomponents/pageheader';
import { Card, Col, Row } from 'react-bootstrap';
import { TagsInput } from "react-tag-input-component";
import { Link } from "react-router-dom";
import { colortag, tags } from '../../../common/commondata';
const Tags = () => {

	const [selected, setSelected] = useState(['NextJs', 'script', 'Net', 'React', 'Angular', 'Vue']);

	return (
		<div>
			<Pageheader titles="Elements" active="Tags" />
			<Row>
				<Col xl={12} lg={12}>
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								DEFAULT TAG
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website aplication.
							</p>
							<div className="text-wrap">
								<div className="example">
									<div className="tags">
										<span className="tag">First tag</span>
										<span className="tag">Second tag</span>
										<span className="tag">Third tag</span>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Link Tag
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website aplication.
							</p>
							<div className="text-wrap">
								<div className="example">
									<div className="tags">
										<span className="tag tag-rounded">First tag</span>
										<span className="tag tag-rounded">Second tag</span>
										<span className="tag tag-rounded">Third tag</span>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Default Tags Addon
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website aplication.
							</p>
							<div className="text-wrap">
								<div className="example">
									<div className="tags">
										<span className="tag tag-default">
											One
											<Link to="#" className="tag-addon"><i
												className="fe fe-x"></i></Link>
										</span>
										<span className="tag tag-default">
											Two
											<Link to="#" className="tag-addon"><i
												className="fe fe-x"></i></Link>
										</span>
										<span className="tag tag-default">
											Three
											<Link to="#" className="tag-addon"><i
												className="fe fe-x"></i></Link>
										</span>
										<span className="tag tag-default">
											Four
											<Link to="#" className="tag-addon"><i
												className="fe fe-x"></i></Link>
										</span>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Colored tags
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website aplication.</p>
							<div className="text-wrap">
								<div className="example">
									<div className="tags">
										{colortag.map((colortags) => (
											<span key={Math.random()} className={`tag tag-${colortags.color}`}>{colortags.data}<Link to="#" className={`tag-addon bg-${colortags.color}`}><i className="fe fe-x"></i></Link> </span>
										))}
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Colored tags
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website aplication.
							</p>
							<div className="text-wrap">
								<div className="example">
									<div className="tags">
										{tags.map((tag) => (
											<span key={Math.random()} className={`tag tag-${tag.color}`}>{tag.data}</span>
										))}
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Input Tags
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website aplication.
							</p>
							<div className="text-wrap">
								<div className="example">
									<TagsInput value={selected} onChange={setSelected} />
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	)
};

Tags.propTypes = {};

Tags.defaultProps = {};

export default Tags;
