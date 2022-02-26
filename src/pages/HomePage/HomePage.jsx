import React, { useEffect, useState } from "react";
import PageHeader from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"
import * as compositionApi from "../../utils/compositionApi";
import { Grid } from "semantic-ui-react";

import "./HomePage.css"


export default function HomePage({ user, handleLogout, }) {
	const [compositions, setCompositions] = useState([])
	const [error, setError] = useState('')


	async function handleUpdateComposition(composition) {
		try {
			//setLoading(true)
			const data = await compositionApi.update(composition);
			console.log(data, "<--- this is the res form the server, in handle updateeeee comp")

			setCompositions([data.composition, ...compositions]);
			//setLoading(false)
		} catch (err) {
			setError(err.messgae);
		}
	}

	async function handleDeleteComposition(selectedComposition) {
		try {
			const deletedComposition = await compositionApi.deleteComposition(selectedComposition)
			console.log(deletedComposition, "<--- composition to be deleted")
			setCompositions([...compositions]);

		} catch (err) {
			setError(err.message)
		}
	}

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

	return (
		<div class="whole-page">
			<Grid >
				<div class="home-header">
					<Grid.Row>
						<Grid.Column >
							<PageHeader handleLogout={handleLogout} user={user} />
						</Grid.Column>
					</Grid.Row>
				</div>

				<Grid.Row>
					<Grid.Column >
						<Menu compositions={compositions} user={user} getCompositions={getCompositions} handleAddComposition={handleAddComposition} handleUpdateComposition={handleUpdateComposition} handleDeleteComposition={handleDeleteComposition} />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	)
}