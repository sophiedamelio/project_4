import React from 'react';
import { Link } from 'react-router-dom'
import { Header, Icon } from "semantic-ui-react";

import "./Header.css"

export default function PageHeader({ user, handleLogout }) {

	return (
		<div className="whole-header">
			<Header as="h3" floated="left">
				<Link to="/">
					<span id="logo"><img src="https://i.imgur.com/hFjKuuR.png" alt="songspace-logo" /></span>
				</Link>
			</Header>
			<Header as="h3" floated="left">
				<div id="greeting">
					Hello {user.username}
				</div>
			</Header>
			<Header floated="right" style={{ marginRight: "5vh", marginTop: "5vh" }}>
				<Link to="/">
					<Icon color="teal" name="home"></Icon>
				</Link>
				<Link to="" onClick={handleLogout}>
					<span id="logout">
						Logout
					</span>
				</Link>
			</Header>
		</div >
	)
}