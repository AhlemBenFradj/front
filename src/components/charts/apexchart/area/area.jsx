import React from 'react';
import Pageheader from '../../../../layouts/layoutcomponents/pageheader';
import { BasicAreaChart, DateTime, NagetiveArea, StackedChart } from '../../../../common/chartdata';
import { Card, Col, Row } from 'react-bootstrap';

const Area = () => (
  <div className="Area">
    <Pageheader titles="Charts" active="Area-Chart" />
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Basic Area chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <BasicAreaChart />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Stacked Area Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <StackedChart />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Area with Negative Values</Card.Title>
          </Card.Header>
          <Card.Body>
            <NagetiveArea />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Datetime X-Axis</Card.Title>
          </Card.Header>
          <Card.Body>
            <DateTime />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

Area.propTypes = {};

Area.defaultProps = {};

export default Area;
