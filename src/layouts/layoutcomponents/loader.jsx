import React from 'react';
import LoaderImage from '../../assets/img/loader.svg';
const Loader = () => (

  <div>
	<div id="global-loader" className='text-center'>
		<img src={LoaderImage} className="loader-img" alt="Loader"/>
	</div>
  </div>
);

Loader.defaultProps = {};

export default Loader;
