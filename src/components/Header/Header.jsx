import React from 'react';
import { Link } from 'react-router-dom'
import { Header, Image, Icon } from "semantic-ui-react";
import "./Header.css"

export default function PageHeader({ user, handleLogout }) {

	return (
		<div class="whole-header">
			<Header as="h3" floated="left">
				<span id="logo">
					<Link to="/">
						<Image src={"https://i.imgur.com/n5Uns60.png"} size="small"></Image>
					</Link>
				</span>
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