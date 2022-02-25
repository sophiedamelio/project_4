import React from 'react';
import { Link } from 'react-router-dom'
import { Header, Segment, Image, Icon, Grid } from "semantic-ui-react";

export default function PageHeader({ user, handleLogout }) {

	return (
		<Header>
			<Grid columns="three">
				<Grid.Row>
					<Grid.Column>
						<Link to="/">
							logo here
						</Link>
						<Image
							src={
								user?.photoUrl
									? user?.photoUrl
									: "https://react.semantic-ui.com/images/wireframe/square-image.png"
							}
							avatar
						></Image>
					</Grid.Column>
					<Grid.Column>
						Hello {user.username}!
					</Grid.Column>
					<Grid.Column>
						<Link to="/">
							<Icon color="yellow" name="home"></Icon>
						</Link>
						<Link to="" onClick={handleLogout}>
							Logout
						</Link>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Header>
	)
}