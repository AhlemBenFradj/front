import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Form, Button, Tabs, Tab, InputGroup, Nav, NavItem, NavLink, } from 'react-bootstrap';
import Pageheader from '../../../../layouts/layoutcomponents/pageheader';
import { connect } from "react-redux";
import { Appdata } from '../../../../common/checkoutdata';
import { Imagesdata } from '../../../../common/commonimages';
const country = [
	{ value: "Brazil", label: "Brazil" },
	{ value: "Czech Republic", label: "Czech Republic" },
	{ value: "Germany", label: "Germany" },
	{ value: "Poland", label: "Poland" },
]
//increment and decrement function

function dec(el) {
	let unit = el.currentTarget.parentElement.querySelector("input").value;

	if (Number(unit) === 0) {
		return false;
	} else {
		el.currentTarget.parentElement.querySelector("input").value--;
	}
}
function inc(el) {
	el.currentTarget.parentElement.querySelector("input").value++;
}

const CheckOut = ({ local_varaiable }) => {

	const [activeTab, setactiveTab] = useState(1);
	const [progressbarvalue, setprogressbarvalue] = useState(0);
	const [passedSteps, setPassedSteps] = useState([1]);
	const [FiltercartData, setCartData] = useState([])
	const [Price, setPrice] = useState(0)


	let cartData = [
		{
			id: Math.random(),
			preview: Imagesdata("Ecom9"),
			title: "Flowerpot",
			oldprice: "2498",
			newprice: "290",
		},
		{
			id: Math.random(),
			preview: Imagesdata("Ecom3"),
			title: "Mens Formal Red Shoes",
			oldprice: "2498",
			newprice: "124",
		},
	]

	function toggleTab(tab, value) {
		if (activeTab !== tab) {
			var modifiedSteps = [...passedSteps, tab];

			if (tab >= 1 && tab <= 6) {
				setactiveTab(tab);
				setPassedSteps(modifiedSteps);
			}
		}
		setprogressbarvalue(value);
	}

	function clickOut() {
		alert('logging successfully, click on next to continue for your order..');
	}


	useEffect(() => {
		// console.log(local_varaiable.length);
		if (local_varaiable == undefined) {
			console.log(cartData);
			setCartData(cartData)
			cartData.filter((ele) => {
				setPrice(Number(ele.newprice) + Price);
			})
		}
		else if (local_varaiable.length == 0) {
			console.log(cartData);
			setCartData(cartData)
			cartData.filter((ele) => {
				setPrice(Number(ele.newprice) + Price);
			})
		}
		else {
			console.log(local_varaiable);
			setCartData(local_varaiable)
			local_varaiable.filter((ele) => {
				setPrice(Number(ele.newprice) + Price);
			})
		}
	}, [local_varaiable])



	return (

		<div>
			<Pageheader titles="Ecommerce" active="Check-out" />
				<Row>
					<Col xl={12}>
						<Card className="custom-card mx-auto checkout-page">
						<Card.Header className="bg-transparent border-bottom-0">
								<div>
									<label className="main-content-label mb-2">Checkout</label> <span className="d-block tx-12 mb-0 text-muted">The Project Budget is a tool used by project managers to estimate the total cost of a project</span>
								</div>
							</Card.Header>
							<Card.Body>
								<Appdata/>
							</Card.Body>
						</Card>
					</Col>
				</Row>
		</div>
	)
};

CheckOut.propTypes = {};

CheckOut.defaultProps = {};

const mapStateToProps = (state) => ({
	local_varaiable: state,
});
export default connect(mapStateToProps)(CheckOut);
