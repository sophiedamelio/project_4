import React from 'react';
import { Link } from 'react-router-dom'
import { Header, Image, Icon } from "semantic-ui-react";
import "./Header.css"

export default function PageHeader({ user, handleLogout }) {

	return (
		<div className="whole-header">
			<Header as="h3" floated="left">
				<Link to="/">
					<span id="logo"><img src="https://i.imgur.com/hFjKuuR.png" /></span>
				</Link>
			</Header>
			<Header>
				<span id="greeting">
					Hello {user.username}
				</span>
			</Header>
			<Header floated="right">
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