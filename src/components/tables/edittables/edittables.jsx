import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../layouts/layoutcomponents/pageheader';
import { BasicEditTable, Savetable } from '../../../common/tablesdata';

const EditTables = () => {
  return (
    <div>
      <Pageheader titles="Tables" active="Edit Tables" />
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title as='h3'>Basic Edit Table</Card.Title>
            </Card.Header>
            <Card.Body>
              <BasicEditTable />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title as='h3'>Add New Row with Edit Table</Card.Title>
            </Card.Header>
            <Card.Body>
              <Savetable />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
};

EditTables.propTypes = {};

EditTables.defaultProps = {};

export default EditTables;
