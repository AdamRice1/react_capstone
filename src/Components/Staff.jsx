import React, { useState } from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Table from 'react-bootstrap/Table';

export default function staff(props) {
	return (
		<div>
			<Container id="mainList" style={{ paddingBottom: '200px' }}>
				<Row>
					<Navbar
						style={{ width: '100%' }}
						id="navs"
						bg="primary"
						variant="dark"
					>
						<Navbar.Brand href="#home">
							Catan's E-Commerce Shop
						</Navbar.Brand>
						<a className="btn btn-secondary" href="/home">
							Home
						</a>
						<Link
							style={{ marginLeft: '10px' }}
							className="btn btn-secondary"
							to="/cart"
						>
							Cart
						</Link>
					</Navbar>
				</Row>
				<Row style={{ display: 'flex', justifyContent: 'center' }}>
					<h3>Items That Are Out Of Stock</h3>
				</Row>
				<Row>
					{/* <Table striped bordered hover>
						<thead>
							<tr>
								<th>Product Name</th>
								<th>Price</th>
								<th>Remove From Cart</th>
							</tr>
						</thead>
						<tbody>
							{props.purchaseable.map(item => (
								<tr>
									<td>{item.item.productName}</td>
									<td>{item.item.price}</td>
									<td>
										<form
											onSubmit={e => {
												e.preventDefault();
												handleRemoval({ item });
											}}
										>
											<button
												className="btn btn-danger"
												type="submit"
											>
												Remove From Cart
											</button>
										</form>
									</td>
								</tr>
							))}
						</tbody>
					</Table> */}
				</Row>
			</Container>
		</div>
	);
}
