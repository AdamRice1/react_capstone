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

export default function Home(props) {
	return (
		<div id="home">
			<div
				style={{
					marginTop: '5%',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					marginBottom: '-20%'
				}}
			>
				<img
					id="mainLogo"
					src="https://bryantcabrera.github.io/Settlers-of-Catan/resources/imgs/logo/settlers-of-catan-logo.png"
				/>
			</div>
			<div>
				<h1
					style={{
						color: 'white',
						marginLeft: '520px',
						marginTop: '300px',
						fontSize: '300%',
						fontFamily: 'Times, serif'
					}}
				>
					Welcome to Catan
				</h1>
				<div id="mid">
					<Link style={{ color: 'white' }} to="/home">
						View Our Products
					</Link>
				</div>
			</div>
			<div id="footer"></div>
		</div>
	);
}
