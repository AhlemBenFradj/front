import React, { useState } from 'react';
import Pageheader from '../../../layouts/layoutcomponents/pageheader';
import { Card, Col, Row } from 'react-bootstrap';
import { WorldMap } from '../../../common/mapsdata';
import { EuropewithGraticule, MapWithTooltip, UsaMapwithAnnotation } from '../../../common/mapsdata';


const Simplemaps = () => {
	const [content, setContent] = useState("");

	return (
		<div>
			<Pageheader titles="Maps" active="Simple maps" />
			<Row className="row-sm">
				<Col lg={6} className="">
					<Card className="mg-b-20">
						<Card.Body className="">
							<div className="main-content-label mg-b-5">
								Simple Map: World with tooltip
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.
							</p>
							<div className="World-map text-center">
								{" "}
								<WorldMap setTooltipContent={setContent} />
							</div>
							{content}
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6}>
					<Card className="mg-b-20">
						<Card.Body className="">
							<div className="main-content-label mg-b-5">
								Simple Map: South America with Marker
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.
							</p>
							<div className="SouthAmerica text-center">
								<MapWithTooltip />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6} >
					<Card className="mg-b-20" id="map2">
						<Card.Body className="">
							<div className="main-content-label mg-b-5">
								Simple Map: Europe with graticule
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.
							</p>
							<div className="Europe-Map text-center">
								<EuropewithGraticule />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6}>
					<Card className="mg-b-20" id="map6">
						<Card.Body className="">
							<div className="main-content-label mg-b-5">
								Vector Map: Germany
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.
							</p>
							<div className="Usa-Map text-center">
								<UsaMapwithAnnotation />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	)
};

Simplemaps.propTypes = {};

Simplemaps.defaultProps = {};

export default Simplemaps;


