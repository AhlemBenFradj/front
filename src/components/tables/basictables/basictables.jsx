import React from 'react';
import { Row, Col, Card, Table, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pageheader from '../../../layouts/layoutcomponents/pageheader';
import {table} from '../../../common/commondata';
const BasicTables = () => {
	return (
		<div>
			<Pageheader titles="Tables" active="Basic-Tables" />
			<Row className="row-sm">
				<Col xl={12} className="">
					<Card className="">
						<Card.Header className="pb-0">
							<div className="d-flex justify-content-between">
								<Card.Title as='h4' className="mg-b-0">SIMPLE TABLE</Card.Title>
								<Dropdown>
									<Dropdown.Toggle as="a" className='no-caret'>
									<i className="mdi mdi-dots-horizontal text-gray"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu>
									<Dropdown.Item eventKey="1">Action</Dropdown.Item>
												<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
												<Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
								
								
							</div>
							<p className="tx-12 tx-gray-500 mb-2">Example of Valex Simple Table. <Link to="#">more</Link></p>

						</Card.Header >
						<Card.Body>
							<div className="table-responsive">
								<Table className="mg-b-0 text-md-nowrap">
									<thead>
										<tr>
											<th>ID</th>
											<th>Name</th>
											<th>Position</th>
											<th>Salary</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">1</th>
											<td>Joan Powell</td>
											<td>Associate Developer</td>
											<td>$450,870</td>
										</tr>
										<tr>
											<th scope="row">2</th>
											<td>Gavin Gibson</td>
											<td>Account manager</td>
											<td>$230,540</td>
										</tr>
										<tr>
											<th scope="row">3</th>
											<td>Julian Kerr</td>
											<td>Senior Javascript Developer</td>
											<td>$55,300</td>
										</tr>
										<tr>
											<th scope="row">4</th>
											<td>Cedric Kelly</td>
											<td>Accountant</td>
											<td>$234,100</td>
										</tr>
										<tr>
											<th scope="row">5</th>
											<td>Samantha May</td>
											<td>Junior Technical Author</td>
											<td>$43,198</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={12}>
					<Card>
						<Card.Header className="pb-0">
							<div className="d-flex justify-content-between">
								<Card.Title as='h4' className="mg-b-0">STRIPED ROWS</Card.Title>
								<Dropdown>
									<Dropdown.Toggle as="a" className='no-caret'>
									<i className="mdi mdi-dots-horizontal text-gray"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu>
									<Dropdown.Item eventKey="1">Action</Dropdown.Item>
												<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
												<Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<p className="tx-12 tx-gray-500 mb-2">Example of Valex Striped Rows.. <Link to="#">Learn more</Link></p>

						</Card.Header>
						<Card.Body>
							<div className="table-responsive">
								<Table className="table-striped mg-b-0 text-md-nowrap">
									<thead>
										<tr>
											<th>ID</th>
											<th>Name</th>
											<th>Position</th>
											<th>Salary</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">1</th>
											<td>Joan Powell</td>
											<td>Associate Developer</td>
											<td>$450,870</td>
										</tr>
										<tr>
											<th scope="row">2</th>
											<td>Gavin Gibson</td>
											<td>Account manager</td>
											<td>$230,540</td>
										</tr>
										<tr>
											<th scope="row">3</th>
											<td>Julian Kerr</td>
											<td>Senior Javascript Developer</td>
											<td>$55,300</td>
										</tr>
										<tr>
											<th scope="row">4</th>
											<td>Cedric Kelly</td>
											<td>Accountant</td>
											<td>$234,100</td>
										</tr>
										<tr>
											<th scope="row">5</th>
											<td>Samantha May</td>
											<td>Junior Technical Author</td>
											<td>$43,198</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={12}>
					<Card className="mg-b-20">
						<Card.Header className="pb-0">
							<div className="d-flex justify-content-between">
								<Card.Title as='h4' className="mg-b-0">Bordered Table</Card.Title>
								<Dropdown>
									<Dropdown.Toggle as="a" className='no-caret'>
									<i className="mdi mdi-dots-horizontal text-gray"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu>
									<Dropdown.Item eventKey="1">Action</Dropdown.Item>
												<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
												<Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<p className="tx-12 tx-gray-500 mb-2">Example of Valex Bordered Table.. <Link to="#">Learn more</Link></p>

						</Card.Header>
						<Card.Body>
							<div className="table-responsive">
								<Table className="table-bordered mg-b-0 text-md-nowrap">
									<thead>
										<tr>
											<th>ID</th>
											<th>Name</th>
											<th>Position</th>
											<th>Salary</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">1</th>
											<td>Joan Powell</td>
											<td>Associate Developer</td>
											<td>$450,870</td>
										</tr>
										<tr>
											<th scope="row">2</th>
											<td>Gavin Gibson</td>
											<td>Account manager</td>
											<td>$230,540</td>
										</tr>
										<tr>
											<th scope="row">3</th>
											<td>Julian Kerr</td>
											<td>Senior Javascript Developer</td>
											<td>$55,300</td>
										</tr>
										<tr>
											<th scope="row">4</th>
											<td>Cedric Kelly</td>
											<td>Accountant</td>
											<td>$234,100</td>
										</tr>
										<tr>
											<th scope="row">5</th>
											<td>Samantha May</td>
											<td>Junior Technical Author</td>
											<td>$43,198</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={12}>
					<Card>
						<Card.Header className="pb-0">
							<div className="d-flex justify-content-between">
								<Card.Title as='h4' className="mg-b-0">Hoverable Rows Table</Card.Title>
								<Dropdown>
									<Dropdown.Toggle as="a" className='no-caret'>
									<i className="mdi mdi-dots-horizontal text-gray"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu>
									<Dropdown.Item eventKey="1">Action</Dropdown.Item>
												<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
												<Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<p className="tx-12 tx-gray-500 mb-2">Example of Valex Hoverable Rows Table.. <Link to="#">Learn more</Link></p>

						</Card.Header>
						<Card.Body>
							<div className="table-responsive">
								<Table className="table-hover mb-0 text-md-nowrap">
									<thead>
										<tr>
											<th>ID</th>
											<th>Name</th>
											<th>Position</th>
											<th>Salary</th>
										</tr>
									</thead>
									
									<tbody>
									{table.map((tables)=>(
										<tr  key={Math.random()}>
											<th scope="row">{tables.id}</th>
											<td>{tables.name}</td>
											<td>{tables.position}</td>
											<td>{tables.salary}</td>
										</tr>
											))}
									</tbody>
								
								</Table>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={12}>
					<Card>
						<Card.Header className="pb-0">
							<div className="d-flex justify-content-between">
								<Card.Title as='h4' className="mg-b-0">Primary Table</Card.Title>
								<Dropdown>
									<Dropdown.Toggle as="a" className='no-caret'>
									<i className="mdi mdi-dots-horizontal text-gray"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu>
									<Dropdown.Item eventKey="1">Action</Dropdown.Item>
												<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
												<Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<p className="tx-12 tx-gray-500 mb-2">Example of Valex primary Rows Table.. <Link to="#">Learn more</Link></p>

						</Card.Header>
						<Card.Body>
							<div className="table-responsive">
								<Table className="table-hover mb-0 text-md-nowrap table-primary">
									<thead>
										<tr>
											<th>ID</th>
											<th>Name</th>
											<th>Position</th>
											<th>Salary</th>
										</tr>
									</thead>
									
									<tbody>
									{table.map((tables)=>(
										<tr  key={Math.random()}>
											<th scope="row">{tables.id}</th>
											<td>{tables.name}</td>
											<td>{tables.position}</td>
											<td>{tables.salary}</td>
										</tr>
											))}
									</tbody>
								
								</Table>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={12}>
					<Card>
						<Card.Header className="pb-0">
							<div className="d-flex justify-content-between">
								<Card.Title as='h4' className="mg-b-0">Secondary Table</Card.Title>
								<Dropdown>
									<Dropdown.Toggle as="a" className='no-caret'>
									<i className="mdi mdi-dots-horizontal text-gray"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu>
									<Dropdown.Item eventKey="1">Action</Dropdown.Item>
												<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
												<Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<p className="tx-12 tx-gray-500 mb-2">Example of Valex Secondary Rows Table.. <Link to="#">Learn more</Link></p>

						</Card.Header>
						<Card.Body>
							<div className="table-responsive">
								<Table className="table-hover mb-0 text-md-nowrap table-secondary">
									<thead>
										<tr>
											<th>ID</th>
											<th>Name</th>
											<th>Position</th>
											<th>Salary</th>
										</tr>
									</thead>
									
									<tbody>
									{table.map((tables)=>(
										<tr  key={Math.random()}>
											<th scope="row">{tables.id}</th>
											<td>{tables.name}</td>
											<td>{tables.position}</td>
											<td>{tables.salary}</td>
										</tr>
											))}
									</tbody>
								
								</Table>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={12}>
					<Card>
						<Card.Header className="pb-0">
							<div className="d-flex justify-content-between">
								<Card.Title as='h4' className="mg-b-0">Success Table</Card.Title>
								<Dropdown>
									<Dropdown.Toggle as="a" className='no-caret'>
									<i className="mdi mdi-dots-horizontal text-gray"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu>
									<Dropdown.Item eventKey="1">Action</Dropdown.Item>
												<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
												<Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<p className="tx-12 tx-gray-500 mb-2">Example of Valex Success Rows Table.. <Link to="#">Learn more</Link></p>

						</Card.Header>
						<Card.Body>
							<div className="table-responsive">
								<Table className="table-hover mb-0 text-md-nowrap table-success">
									<thead>
										<tr>
											<th>ID</th>
											<th>Name</th>
											<th>Position</th>
											<th>Salary</th>
										</tr>
									</thead>
									
									<tbody>
									{table.map((tables)=>(
										<tr  key={Math.random()}>
											<th scope="row">{tables.id}</th>
											<td>{tables.name}</td>
											<td>{tables.position}</td>
											<td>{tables.salary}</td>
										</tr>
											))}
									</tbody>
								
								</Table>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={12}>
					<Card>
						<Card.Header className="pb-0">
							<div className="d-flex justify-content-between">
								<Card.Title as='h4' className="mg-b-0">Danger Table</Card.Title>
								<Dropdown>
									<Dropdown.Toggle as="a" className='no-caret'>
									<i className="mdi mdi-dots-horizontal text-gray"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu>
									<Dropdown.Item eventKey="1">Action</Dropdown.Item>
												<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
												<Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<p className="tx-12 tx-gray-500 mb-2">Example of Valex Danger Rows Table.. <Link to="#">Learn more</Link></p>

						</Card.Header>
						<Card.Body>
							<div className="table-responsive">
								<Table className="table-hover mb-0 text-md-nowrap table-danger">
									<thead>
										<tr>
											<th>ID</th>
											<th>Name</th>
											<th>Position</th>
											<th>Salary</th>
										</tr>
									</thead>
									
									<tbody>
									{table.map((tables)=>(
										<tr  key={Math.random()}>
											<th scope="row">{tables.id}</th>
											<td>{tables.name}</td>
											<td>{tables.position}</td>
											<td>{tables.salary}</td>
										</tr>
											))}
									</tbody>
								
								</Table>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={12}>
					<Card>
						<Card.Header className="pb-0">
							<div className="d-flex justify-content-between">
								<Card.Title as='h4' className="mg-b-0">Info Table</Card.Title>
								<Dropdown>
									<Dropdown.Toggle as="a" className='no-caret'>
									<i className="mdi mdi-dots-horizontal text-gray"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu>
									<Dropdown.Item eventKey="1">Action</Dropdown.Item>
												<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
												<Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<p className="tx-12 tx-gray-500 mb-2">Example of Valex Info Rows Table.. <Link to="#">Learn more</Link></p>

						</Card.Header>
						<Card.Body>
							<div className="table-responsive">
								<Table className="table-hover mb-0 text-md-nowrap table-info">
									<thead>
										<tr>
											<th>ID</th>
											<th>Name</th>
											<th>Position</th>
											<th>Salary</th>
										</tr>
									</thead>
									
									<tbody>
									{table.map((tables)=>(
										<tr  key={Math.random()}>
											<th scope="row">{tables.id}</th>
											<td>{tables.name}</td>
											<td>{tables.position}</td>
											<td>{tables.salary}</td>
										</tr>
											))}
									</tbody>
								
								</Table>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={12}>
					<Card>
						<Card.Header className="pb-0">
							<div className="d-flex justify-content-between">
								<Card.Title as='h4' className="mg-b-0">Warning Table</Card.Title>
								<Dropdown>
									<Dropdown.Toggle as="a" className='no-caret'>
									<i className="mdi mdi-dots-horizontal text-gray"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu>
									<Dropdown.Item eventKey="1">Action</Dropdown.Item>
												<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
												<Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<p className="tx-12 tx-gray-500 mb-2">Example of Valex Warning Rows Table.. <Link to="#">Learn more</Link></p>

						</Card.Header>
						<Card.Body>
							<div className="table-responsive">
								<Table className="table-hover mb-0 text-md-nowrap table-warning">
									<thead>
										<tr>
											<th>ID</th>
											<th>Name</th>
											<th>Position</th>
											<th>Salary</th>
										</tr>
									</thead>
									
									<tbody>
									{table.map((tables)=>(
										<tr  key={Math.random()}>
											<th scope="row">{tables.id}</th>
											<td>{tables.name}</td>
											<td>{tables.position}</td>
											<td>{tables.salary}</td>
										</tr>
											))}
									</tbody>
								
								</Table>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	)
};

BasicTables.propTypes = {};

BasicTables.defaultProps = {};

export default BasicTables;
