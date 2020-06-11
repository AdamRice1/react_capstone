import React, { useState } from 'react';
import '../App.css';
import App from '../App.js';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Header from './Header';
import Cart from './Cart';
import images from './images';
//import products from '../products.json';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import FormControl from 'react-bootstrap/FormControl';

export default function ProductList(props) {
	const [current, setcurrent] = useState();
	const [show, setShow] = useState(false);
	const [message, setMessage] = useState('');
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	//Function to add items to the cart.
	function handleadding(input) {
		console.log(input);
		props.addToCart(input);
		input.item.total = input.item.total - 1;
		props.totalamount(input.item.price);
	}
	return (
		<Container id="mainList">
			<Row></Row>
			<Row>
				<Table striped bordered hover>
					<thead>
						<tr style={{ fontFamily: 'Times, serif' }}>
							<th>Product Number</th>
							<th>Product Image</th>
							<th>Product Name</th>
							<th>Price</th>
							<th>Manufacturer</th>
							<th>Category</th>
							<th>Amount Left In Stock</th>
							<th>Add To Cart</th>
						</tr>
					</thead>
					<tbody style={{ fontFamily: 'Times, serif' }}>
						{props.value.map(item => (
							<tr>
								<td>{item.serialNumber}</td>
								<td>
									<img
										style={{
											width: '100px',
											display:
												item.productName ==
												'Nothing Matches that Search'
													? 'none'
													: 'block'
										}}
										src={item.url}
										alt="Catan Item"
									/>
								</td>
								<td>{item.productName}</td>
								<td>${item.price}</td>
								<td>{item.manufacturer}</td>
								<td>{item.tag}</td>
								<td>{item.total}</td>
								<td>
									{item.total > 0 && (
										<Form
											onSubmit={e => {
												setcurrent({ item });
												e.preventDefault();
												handleadding({ item });
											}}
										>
											<button
												type="submit"
												className="btn btn-danger"
											>
												Add to Cart
											</button>
										</Form>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</Row>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Image of Item</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<img className="card-img-top" src="../assets/city.jpg" />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</Container>
	);
}
