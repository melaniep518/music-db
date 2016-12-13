import React from 'react';
import $ from 'jquery';

const Login = React.createClass({
	getInitialState() {
		return {
			username: '',
			password: ''
		}
	},
	submitLoginInfo() {
        $.ajax({
            type: "POST",
            url: '/login',  
            data: this.state
            })
        .done(function(data) {
        	console.log(data)
        })
	},

	updateUsername(event) {
		this.setState({username: event.target.value})
	},

	updatePassword(event) {
		this.setState({password: event.target.value})
	},

	render() {
		return (
			<div>
			{this.state.username ? <p>{'Welcome, ' + this.state.username}</p> : <p>{'Welcome, please log in.'}</p>}
			Username: 
				<input onChange={this.updateUsername} type="text" name="username" />
			Password
				<input onChange={this.updatePassword} type="text" name="password" />
				<button onClick={this.submitLoginInfo}>Login</button>
			</div>
		)	
	}

})

export default Login;