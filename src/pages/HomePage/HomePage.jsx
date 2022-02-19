import React, { useEffect, useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Composition from "../../components/Composition/Composition"
import PageHeader from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";

import * as compositionApi from "../../utils/compositionApi";
import { Grid } from "semantic-ui-react";


export default function HomePage({ user, handleLogout }) {
	const [compositions, setCompositions] = useState([])
	//const [loading, setLoading] = useState(true);
	const [error, setError] = useState('')

	//async function addFavorite - icebox

	async function handleAddComposition(composition) {
		try {
			//setLoading(true)
			const data = await compositionApi.create(composition);
			console.log(data, "<--- this is the res form the server, in handle add comp")

			setCompositions([data.composition, ...compositions]);
			//setLoading(false)
		} catch (err) {
			setError(err.messgae);
		}
	}

	async function getCompositions() {
		try {
			const data = await compositionApi.getAll()
			console.log(data, "<--- this is the data")
			setCompositions([...data.compositions])
			//setLoading(false)
		} catch (err) {
			console.log(err.message, "<-- this is the error")
			setError(err.message)
		}
	}

	useEffect(() => {
		getCompositions();
	}, [])

	//if (loading) {
	//	return (
	//		<>
	//			<Header handleLogout={handleLogout} user={user} />
	//			{/*<Loading />  fix this, loading*/}
	//		</>
	//	);
	//}

	//if (error) {
	//	return (
	//		<>
	//			<Header handleLogout={handleLogout} user={user} />
	//			<ErrorMessage error={error} />
	//		</>
	//	)
	//}

	console.log(compositions, "<-- compositions")

	return (
		<>
			<Grid centered>
				<Grid.Row>
					<Grid.Column>
						<PageHeader handleLogout={handleLogout} user={user} />
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column>
						<Composition />
						<Menu compositions={compositions} user={user} getCompositions={getCompositions} handleAddComposition={handleAddComposition} />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</>
	)
}