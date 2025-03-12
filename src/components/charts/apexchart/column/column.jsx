import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../../layouts/layoutcomponents/pageheader';
import { BasicColumn, ColumnMarker, ColumnNegativeValue, StackedColumn } from '../../../../common/chartdata';

const Column = () => (
  <div className="Column">
    <Pageheader titles="Charts" active="Column-Chart" />
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Basic Column Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <BasicColumn />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Stacked Column Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <StackedColumn />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Column Chart with Negative Values</Card.Title>
          </Card.Header>
          <Card.Body>
            <ColumnNegativeValue />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Column with Markers</Card.Title>
          </Card.Header>
          <Card.Body>
            <ColumnMarker />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

Column.propTypes = {};

Column.defaultProps = {};

export default Column;
