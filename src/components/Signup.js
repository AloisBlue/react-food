import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

// import images
import main1 from '../img/main1.jpg';

class Signup extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			username: '',
			firstname: '',
			lastname: '',
			password: '',
			confirmpassword: '',
			errors: {},
			messages: {}
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	};

	onChange = (e) =>
		this.setState({ [e.target.name]: e.target.value});

	onSubmit = (e) => {
		e.preventDefault();

		const addUser = {
			email: this.state.email,
			username: this.state.username,
			firstname: this.state.firstname,
			lastname: this.state.lastname,
			password: this.state.password1,
			confirmpassword: this.state.password2
		};

		axios
			.post('http://127.0.0.1:5000/api/v2/auth/signup', addUser)
			.then(res => this.setState({messages: res.data}))
			.catch(err => this.setState({errors: err.response.data}));
	}

	render() {
		const {errors, messages} = this.state;

		return(
				<div>
				<div className="wrapper">
				<div className="outer">

				<div className="top">

				</div>
				<div className="slider">
					<img src={main1} alt="slider 1" width="1200" height="250" />
				</div>
				<div className="banner" align="right">
					<p>Fast Food Fast Sellers</p>
				</div>
				<div className="topnav">
					<nav>
						<ul className="nav">
								<li><Link to="/" className="active">Welcome</Link></li>
								<li><Link to="/orders">Orders</Link></li>
								<li><Link to="/menu">Menu</Link></li>
								<li><Link to="/admin">Admin</Link></li>
								<li className="righter"><Link to="/signup">Sign Up</Link></li>
								<li className="righter" id="or"><p>or</p></li>
								<li className="righter"><Link to="/login">Login</Link></li>
						</ul>
					</nav>
				</div>
				<div className="content">
					<h1 align="center">Sign Up</h1>
					<p align="center">
						Sign up for an account with Rosewood Food Sellers
						{messages.Success && (
							<div className="success">{messages.Success} &#10003;</div>
						)}
					</p>
					<div className="signer">
		<form method="post" id="signupForm" onSubmit={this.onSubmit}>
		<label htmlFor="email">Email</label>
		<input
			type="text"
			id="email"
			name="email"
			placeholder="example@example.com"
			value={this.state.email}
			onChange={this.onChange}
		/>
		{errors.Email && (
			<div className="invalid-feedback">{errors.Email}</div>
		)}
		{errors.message && (
			<div className="invalid-feedback">{errors.message.email}</div>
		)}

		<label htmlFor="uname">User Name</label>
		<input
			type="text"
			id="username"
			name="username"
			placeholder="User Name"
			value={this.state.username}
			onChange={this.onChange}
		/>
		{errors.Username && (
			<div className="invalid-feedback">{errors.Username}</div>
		)}
		{errors.message && (
			<div className="invalid-feedback">{errors.message.username}</div>
		)}

		<label htmlFor="fname">First Name</label>
		<input
			type="text"
			id="firstname"
			name="firstname"
			placeholder="First Name"
			value={this.state.firstname}
			onChange={this.onChange}
		/>
		{errors.Firstname && (
			<div className="invalid-feedback">{errors.Firstname}</div>
		)}
		{errors.message && (
			<div className="invalid-feedback">{errors.message.firstname}</div>
		)}

		<label htmlFor="lname">Last Name</label>
		<input
			type="text"
			id="lastname"
			name="lastname"
			placeholder="Last Name"
			value={this.state.lastname}
			onChange={this.onChange}
		/>
		{errors.Lastname && (
			<div className="invalid-feedback">{errors.Lastname}</div>
		)}
		{errors.message && (
			<div className="invalid-feedback">{errors.message.lastname}</div>
		)}

		<label htmlFor="password1">Enter Password</label>
		<input
			type="password"
			id="password"
			name="password1"
			placeholder="Enter Your Password"
			value={this.state.password1}
			onChange={this.onChange}
		/>
		{errors.Password && (
			<div className="invalid-feedback">{errors.Password}</div>
		)}
		{errors.message && (
			<div className="invalid-feedback">{errors.message.password}</div>
		)}

		<label htmlFor="password2">Confirm Password</label>
		<input
			type="password"
			id="confirmpassword"
			name="password2"
			placeholder="Confirm Your Password"
			value={this.state.password2}
			onChange={this.onChange}
		/>
		{errors.ConfirmPassword && (
			<div className="invalid-feedback">{errors.ConfirmPassword}</div>
		)}
		{errors.message && (
			<div className="invalid-feedback">{errors.message.confirmpassword}</div>
		)}


		<button type="submit">Submit
		</button>
		</form>
		</div>
		</div>
		</div>
		<div className="footer">
			<p>&copy; 2018 Rosewood Food Sellers - All Rights Reserved.</p>
		</div>
		</div>
		</div>
			);
	}
}

export default Signup;
