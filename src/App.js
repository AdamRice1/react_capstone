import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import products from './products.json';
import Cart from './Components/Cart';
import { Link } from 'react-router-dom';
import Staff from './Components/Staff';
import Home from './Components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(props) {
	const [items, setitems] = useState(products);
	const [ifdone, setifdone] = useState(false);
	const [purchaseable, setPurchaseable] = useState([]);
	const [total, settotal] = useState([]);
	const [amount, setAmount] = useState(0);
	const [low, setlow] = useState([]);

	// A function to find the total amount of all the items in the cart.
	function totalamount(price) {
		console.log(price + 'this is the price');
		settotal(total.concat(price));
		console.log(total);
		let new_amount = 0;
		for (var i = 0; i < total.length; i++) {
			console.log(parseInt(total[i]));
			new_amount = new_amount + parseInt(total[i]);
		}
		setAmount(new_amount);
		console.log(amount);
	}
	// This function is to search products and return a new list
	function searchUsers(input) {
		console.log(input);
		const new_products = products.filter(p =>
			Object.values(p).includes(input)
		);
		if (new_products.length > 0) {
			setitems(new_products);
		} else {
			setitems([{ productName: 'Nothing Matches that Search' }]);
		}
	}
	// This function is to reset search
	function resetSearch() {
		setitems(products);
	}
	//This function allows a user to add items to the cart view.
	function addToCart(input) {
		setPurchaseable(purchaseable.concat(input));
	}
	// This function completes the purchase.
	function CompletePurchase() {
		alert(
			'Thank You for Your Purchase. You Have Scored Some Victory Points!'
		);
		setPurchaseable([]);
	}
	//A function to complete the purchase.
	function removeFromCart(input) {
		const new_value = purchaseable.filter(p => p.item !== input);
		console.log(new_value);
		setPurchaseable(new_value);
	}

	// function removeFromCart(i) {
	// 	const newData = purchaseable.filter((item, index) => {
	// 		console.log(item);
	// 		if (index !== i) {
	// 			console.log('in the iff');
	// 			return item;
	// 		}
	// 	});
	// 	setPurchaseable(newData);
	// }
	return (
		<Router>
			<Switch>
				<Route
					exact
					path="/"
					render={props => (
						<div>
							<Home />
						</div>
					)}
				/>
				<Route
					exact
					path="/home"
					render={props => (
						<div className="App" id="wrapper">
							<Header
								searchUsers={searchUsers.bind(props)}
								items={items}
								addToCart={addToCart.bind(props)}
								totalamount={totalamount.bind(props)}
								low={low}
								purchaseable={purchaseable}
								resetSearch={resetSearch.bind(props)}
							/>
						</div>
					)}
				/>
				<Route
					exact
					path="/cart"
					render={props => (
						<div className="App" id="wrapper">
							<Cart
								purchaseable={purchaseable}
								CompletePurchase={CompletePurchase.bind(props)}
								removeFromCart={removeFromCart.bind(props)}
								amount={amount}
							/>
						</div>
					)}
				/>
				<Route
					exact
					path="/staff"
					render={props => (
						<div className="App" id="wrapper">
							<Staff />
						</div>
					)}
				/>
			</Switch>
		</Router>
	);
}

export default App;
