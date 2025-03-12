import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Imagesdata } from '../../../../common/commonimages';


const Error404 = () => {

	return (

		<div>
			<div className="main-error-wrapper page-h">
				<img src={Imagesdata("pngs1")} className="error-page" alt="error" />
				<h2>Oopps. The page you were looking for doesn't exist.</h2>
				<h6>You may have mistyped the address or the page may have moved.</h6><Link className="btn btn-outline-danger" to={`${import.meta.env.BASE_URL}indexpage/`}>Back to Home</Link>
			</div>
		</div>
	)
};

Error404.propTypes = {};

Error404.defaultProps = {};

export default Error404;
