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
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';

import Table from 'react-bootstrap/Table';

export default function Cart(props) {
	// A function to help with completing the purchase.
	function handleSubmit() {
		props.CompletePurchase();
	}
	// A function to help with removing items.
	function handleRemoval(input) {
		const toRemove = input.item.item;
		console.log('to remove this item' + toRemove);
		props.removeFromCart(toRemove);
	}
	// A function for Stripe API
	function handleToken(token, addresses) {
		console.log(token, addresses);
		props.CompletePurchase();
	}
	return (
		<Container
			id="mainList"
			style={{
				paddingBottom: '200px',
				height: '800px',
				marginTop: '-10px'
			}}
		>
			<Row>
				<Navbar
					style={{ width: '100%' }}
					id="navs"
					bg="primary"
					variant="dark"
				>
					<Navbar.Brand>
						<Link to="/" className="bigLink">
							<h1 style={{ color: 'rgba(255, 244, 145, 1)' }}>
								Catan's E-Commerce Shop
							</h1>
						</Link>
					</Navbar.Brand>
					<Link
						style={{
							backgroundColor: 'rgba(255, 244, 145, 1)',
							color: 'black',
							fontFamily: 'Times, serif'
						}}
						className="btn navbtn"
						to="/home"
					>
						Home
					</Link>
				</Navbar>
			</Row>
			<Row
				style={{
					display: 'flex',
					justifyContent: 'center',
					fontFamily: 'Times, serif'
				}}
			>
				<h3>Shopping Cart</h3>
			</Row>
			<Row>
				<Table
					striped
					bordered
					hover
					style={{ fontFamily: 'Times, serif' }}
				>
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
								<td>${item.item.price}</td>
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
				</Table>
			</Row>
			{/* <Row style={{ display: 'flex', justifyContent: 'center' }}>
					<Form
						onSubmit={e => {
							e.preventDefault();
							handleSubmit();
						}}
					>
						<Button type="submit" className="btn btn-secondary">
							Complete Purchase
						</Button>
					</Form>
				</Row> */}
			<Row
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center'
				}}
			>
				<StripeCheckout
					stripeKey="pk_test_51GsBTZDhNDgBvvU8r4Odqivf4ZLw67vv8kZjZbUQKEz06jHiens85yJpS21nuXcuKAGIwlzFAQS5m9s4JRbqFkJB00c6qp4R5F"
					token={handleToken}
					billingAddress
					shippingAddress
					amount={props.amount * 100}
					onClick={e => {
						e.preventDefault();
						handleSubmit();
					}}
				/>
			</Row>
		</Container>
	);
}
