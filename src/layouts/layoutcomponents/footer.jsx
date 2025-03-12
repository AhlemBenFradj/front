import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="">
    <div className="main-footer">
      <div className="container-fluid pd-t-0 ht-100p">
        <span> Copyright © 2025 <Link to="https://webplus.tn/" className="text-primary">WebPlus</Link>. All rights reserved.</span>
      </div>
    </div>
  </div>
);


Footer.defaultProps = {};

export default Footer;
