import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../../layouts/layoutcomponents/pageheader';
import { LineandAreaChart, LineColumn, LineColumnArea, MultipleSeries } from '../../../../common/chartdata';

const Mixed = () => (
  <div className="Mixed">
    <Pageheader titles="Charts" active="Mixed-Chart" />
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Line and Column Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <LineColumn />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Multiple Y-axis Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <MultipleSeries />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Line and area Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <LineandAreaChart />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Line , Column and area Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <LineColumnArea />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

Mixed.propTypes = {};

Mixed.defaultProps = {};

export default Mixed;
