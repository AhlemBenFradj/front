import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';

const Error501 = () => (
	<div>
		<Row>
			<div className="main-error-wrapper wrapper-1 page-h">
				<h1 className="">501<span className="tx-20">error</span></h1>
				<h2 className="">Oopps. The page you were looking for doesn't exist.</h2>
				<h6 className="">You may have mistyped the address or the page may have moved.</h6><Link className="btn btn-primary" to={`${import.meta.env.BASE_URL}indexpage/`}>Back to Home</Link>
			</div>
		</Row>
	</div>
);

Error501.propTypes = {};

Error501.defaultProps = {};

export default Error501;
