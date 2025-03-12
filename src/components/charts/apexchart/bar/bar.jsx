import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../../layouts/layoutcomponents/pageheader';
import { BarNagetiveValue, BasicBarChart, GroupedBarChart, StackedBar } from '../../../../common/chartdata';

const Bar = () => (
  <div className="Bar">
    <Pageheader titles="Charts" active="Bar-Chart" />
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Basic Bar chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <BasicBarChart />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Grouped Bar Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <GroupedBarChart />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Stacked Bar chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <StackedBar />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Bar with Negative Values</Card.Title>
          </Card.Header>
          <Card.Body>
            <BarNagetiveValue />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

Bar.propTypes = {};

Bar.defaultProps = {};

export default Bar;
