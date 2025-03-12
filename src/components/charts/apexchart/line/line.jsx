import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../../layouts/layoutcomponents/pageheader';
import { Annotation, BasicChart, Dashedline, Stepline } from '../../../../common/chartdata';

const Line = () => (
  <div className="Line">
    <Pageheader titles="Charts" active="Line-Chart" />

    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Basic Line chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <BasicChart />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Step line Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <Stepline />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Dashed line Chart with Gradient color</Card.Title>
          </Card.Header>
          <Card.Body>
            <Dashedline />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Line with Annotation Charts</Card.Title>
          </Card.Header>
          <Card.Body>
            <Annotation />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

Line.propTypes = {};

Line.defaultProps = {};

export default Line;
