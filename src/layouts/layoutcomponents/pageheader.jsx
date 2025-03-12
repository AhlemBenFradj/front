import React, { Fragment } from 'react';
import { ButtonGroup, Dropdown, Button, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Pageheader = (props) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <Fragment>
      <div className="breadcrumb-header justify-content-between">
        <div className="my-auto">
          <h4 className="page-title">{props.titles}</h4>
          <Breadcrumb as="ol" className="breadcrumb">
            <Breadcrumb.Item as="li" className="breadcrumb-item">
              <div as="a">{props.titles}</div>
            </Breadcrumb.Item>
            <Breadcrumb.Item as="li" className="breadcrumb-item" active>{props.active}</Breadcrumb.Item>
          </Breadcrumb>

        </div>
        {/* <div className="d-sm-flex">
          <div className="d-flex my-xl-auto right-content">
            <div className="pe-1 mb-xl-0">
              <Dropdown as={ButtonGroup} className="me-2">
                <Button variant='info'>Filter by Duration</Button>
                <Dropdown.Toggle split variant='info' id="dropdown-split-duration" />
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">5 Minutes</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">10 Minutes</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">15 Minutes</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="pe-1 mb-xl-0">
              <Dropdown as={ButtonGroup} className="me-2">
                <Button variant='danger'>Filter by Language</Button>
                <Dropdown.Toggle split variant='danger' id="dropdown-split-language" />
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">French</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Arabic</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="pe-1 mb-xl-0">
              <Dropdown as={ButtonGroup} className="me-2">
                <Button variant='warning'>Filter by Category</Button>
                <Dropdown.Toggle split variant='warning' id="dropdown-split-category" />
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">News</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Sports</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="mb-xl-0 my-xl-auto right-content">
            <Dropdown as={ButtonGroup} placement="bottom-end" id="bg-vertical-dropdown-1">
              <Button variant="primary">{new Date().getDate()} {months[new Date().getMonth()]} {new Date().getFullYear()}</Button>
              <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />
            </Dropdown>
          </div>
        </div> */}
      </div>
    </Fragment>
  )
};

Pageheader.defaultProps = {};

export default Pageheader;
