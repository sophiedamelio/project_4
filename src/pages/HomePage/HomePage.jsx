import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";

import * as compositionApi from "../../utils/compositionApi";
import PageHeader from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"

import "./HomePage.css"

export default function HomePage({ user, handleLogout, }) {
	const [compositions, setCompositions] = useState([])
	const [error, setError] = useState('')

	const [selectedComposition, setSelectedComposition] = useState('')

	// set selected composition state here, then send to composition component
	function selectComposition(composition) {
		setSelectedComposition(composition) // comp that was clicked on
	}


	async function handleUpdateComposition(infoFromTheForm) {
		try {
			const data = await compositionApi.update(selectedComposition._id, infoFromTheForm);
			// this line filters all the 'unchanged' compositions into a new array
			let unchangedCompositions = (compositions.filter((comp) => comp._id !== selectedComposition._id))
			setCompositions([data, ...unchangedCompositions]);
		} catch (err) {
			setError(err.messgae);
		}
	}

	async function handleDeleteComposition(selectedCompositionId) {
		try {
			const deletedComposition = await compositionApi.deleteComposition(selectedCompositionId)
			setCompositions(compositions.filter((comp) => comp._id !== selectedCompositionId));
			setSelectedComposition('');
		} catch (err) {
			setError(err.message)
		}
	}

	async function handleAddComposition(composition) {
		try {
			const data = await compositionApi.create(composition);
			setCompositions([data.composition, ...compositions]);
		} catch (err) {
			console.log(err.message, "<-- this is the error, from handleAppComposition")
			setError(err.messgae);
		}
	}

	async function getCompositions() {
		try {
			const data = await compositionApi.getAll()
			setCompositions([...data.compositions])

		} catch (err) {
			console.log(err.message, "<-- this is the error, from getCompositions")
			setError(err.message)
		}
	}

	useEffect(() => {
		getCompositions();
	}, [])


	return (
		<div className="whole-page">
			<Grid >
				<div className="home-header">
					<Grid.Row style={{ marginTop: "5vh" }}>
						<Grid.Column >
							<PageHeader handleLogout={handleLogout} user={user} />
						</Grid.Column>
					</Grid.Row>
				</div>

				<Grid.Row>
					<Grid.Column >
						<Menu compositions={compositions} selectComposition={selectComposition} selectedComposition={selectedComposition} user={user} getCompositions={getCompositions} handleAddComposition={handleAddComposition} handleUpdateComposition={handleUpdateComposition} handleDeleteComposition={handleDeleteComposition} />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	)
}