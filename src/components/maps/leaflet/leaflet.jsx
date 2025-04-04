import React from 'react';
import Pageheader from '../../../layouts/layoutcomponents/pageheader';
import { MapContainer, TileLayer, Popup, CircleMarker, Polyline, Rectangle, Polygon, Circle } from 'react-leaflet';
import { Card, Col, Row } from 'react-bootstrap';

const Leaflet = () => {

	//row-1
	const position = [51.505, -0.09];

	//row-2
	const redOptions = { color: "red" };
	const center = [51.51, -0.12];


	//Row-3
	const fillBlueOptions = { fillColor: "blue" };
	const blackOptions = { color: "black" };
	const limeOptions = { color: "lime" };
	const purpleOptions = { color: "purple" };
	const redOptions1 = { color: "red" };
	const polyline = [[51.505, -0.09],
	[51.51, -0.1],
	[51.51, -0.12],
	];

	const center1 = [51.51, -0.12];
	const multiPolyline = [
		[
			[51.5, -0.1],
			[51.5, -0.12],
			[51.52, -0.12],
		],
		[
			[51.5, -0.05],
			[51.5, -0.06],
			[51.52, -0.06],
		],
	];

	const polygon = [
		[51.515, -0.09],
		[51.52, -0.1],
		[51.52, -0.12],
	];

	const multiPolygon = [
		[
			[51.51, -0.12],
			[51.51, -0.13],
			[51.53, -0.13],
		],
		[
			[51.51, -0.05],
			[51.51, -0.07],
			[51.53, -0.07],
		],
	];

	const rectangle = [
		[51.49, -0.08],
		[51.5, -0.06],
	];
	return (
		<div>
			<Pageheader titles="Maps" active="Mapel maps" />
			<Row>
				<Col lg={12}>
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Basic
							</div>
							<p className="mg-b-20">A default map style by Leaflet Maps.</p>
							<div className="ht-300">
								<MapContainer center={position} zoom={13} scrollWheelZoom={false} className='mapleaflet ht-300' id="leaflet1" style={{ height: "300px" }}>
									<TileLayer
										attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
										url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
									/>
								</MapContainer>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12}>
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								With Popup
							</div>
							<p className="mg-b-20">Popups are usually used when you want to attach some information to a map.</p>
							<div className="ht-300">
								<MapContainer center={center} zoom={13} scrollWheelZoom={false} className="ht-300" id="leaflet2" style={{ height: "300px" }}>
									<TileLayer
										attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
										url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
									/>
									<CircleMarker
										center={[51.51, -0.12]}
										pathOptions={redOptions}
										radius={20}
									>

										<Popup >Popup in CircleMarker</Popup>

									</CircleMarker>
								</MapContainer>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col lg={12}>
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Map with circle
							</div>
							<p className="mg-b-20">Adding a circle is the same (except for specifying the radius in meters as a second argument), but lets you control how it looks by passing options as the last argument when creating the object.</p>
							<div className="ht-300">
								<MapContainer center={center1} zoom={13} scrollWheelZoom={false} className="ht-200 ht-sm-300 ht-md-400" id="leaflet3" style={{ height: "300px" }}>
									<TileLayer
										attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
										url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
									/>
									<Circle center={center1} pathOptions={fillBlueOptions} radius={200} />
									<CircleMarker
										center={[51.51, -0.12]}
										pathOptions={redOptions1}
										radius={20}
									>
										<Popup>Popup in CircleMarker</Popup>
									</CircleMarker>
									<Polyline pathOptions={limeOptions} positions={polyline} />
									<Polyline pathOptions={limeOptions} positions={multiPolyline} />
									<Polygon pathOptions={purpleOptions} positions={polygon} />
									<Polygon pathOptions={purpleOptions} positions={multiPolygon} />
									<Rectangle bounds={rectangle} pathOptions={blackOptions} />
								</MapContainer>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	)
};

Leaflet.propTypes = {};

Leaflet.defaultProps = {};

export default Leaflet;
