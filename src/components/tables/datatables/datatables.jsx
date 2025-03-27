import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../layouts/layoutcomponents/pageheader';
import { Datatable, Datatable1, ResponsiveDataTable, BasicDataTable } from '../../../common/tablesdata';


const DataTables = () => {

	return (

		<div>
			<Pageheader titles="Tables" active="Data Tables" />

			<Row className="row-sm">
				<Col lg={12}>
					<Card>
						<Card.Header>
							<Card.Title as='h3'>Responsive DataTable</Card.Title>
						</Card.Header>
						<Card.Body>
							<ResponsiveDataTable />
						</Card.Body>
					</Card>
				</Col>
			</Row>

		</div>
	)
};

DataTables.propTypes = {};

DataTables.defaultProps = {};

export default DataTables;
