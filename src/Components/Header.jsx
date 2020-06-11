import React, { useState } from 'react';
import '../App.css';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import ProductList from './ProductList';
import { Link } from 'react-router-dom';
import Cart from './Cart';

export default function Header(props) {
	const [value, setValue] = useState('');

	// A function to help with the search
	function search() {
		props.searchUsers(value);
	}

	return (
		<div>
			<Navbar id="navs" bg="primary" variant="dark">
				<Navbar.Brand>
					<Link to="/" className="bigLink">
						<h1 style={{ color: 'rgba(255, 244, 145, 1)' }}>
							Catan's E-Commerce Shop
						</h1>
					</Link>
				</Navbar.Brand>
				<Nav className="mr-auto">
					<Link
						style={{
							backgroundColor: 'rgba(255, 244, 145, 1',
							color: 'black',
							fontFamily: 'Times, serif'
						}}
						className="btn navbtn"
						to="/cart"
					>
						Cart
					</Link>
					<span
						className="dot"
						style={{
							display:
								props.purchaseable.length < 1 ? 'none' : 'flex'
						}}
					>
						<p style={{ marginLeft: '6px', marginBottom: '10px' }}>
							{props.purchaseable.length}
						</p>
					</span>
				</Nav>
				<Form
					inline
					onSubmit={e => {
						setValue(e.target.value);
						search(value);
						e.preventDefault();
					}}
				>
					<FormControl
						type="text"
						placeholder="Search"
						className="mr-sm-2"
						value={value}
						onChange={e => setValue(e.target.value)}
					/>
					<Button
						type="submit"
						variant="outline-light"
						style={{ fontFamily: 'Times, serif' }}
					>
						Search
					</Button>
				</Form>
				<Form
					style={{ marginLeft: '10px' }}
					inline
					onSubmit={e => {
						props.resetSearch();
						e.preventDefault();
					}}
				>
					<Button
						type="submit"
						variant="outline-light"
						style={{ fontFamily: 'Times, serif' }}
					>
						Reset Search
					</Button>
				</Form>
			</Navbar>
			<ProductList
				spit={value}
				products={props.products}
				value={props.items}
				addToCart={props.addToCart.bind(props)}
				totalamount={props.totalamount.bind(props)}
				low={props.low}
			/>
		</div>
	);
}
