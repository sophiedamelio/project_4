import React, { useEffect, useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Composition from "../../components/Composition/Composition"
import PageHeader from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"
import userService from "../../utils/userService";
import { useNavigate, Link, Route, Routes } from "react-router-dom";

import * as compositionApi from "../../utils/compositionApi";
import { Grid } from "semantic-ui-react";
//import composition from "../../../models/composition";


export default function HomePage({ user, handleLogout, }) {
	const [compositions, setCompositions] = useState([])
	const [error, setError] = useState('')


	async function handleUpdateComposition(composition) {
		try {
			//setLoading(true)
			const data = await compositionApi.update(composition);
			console.log(data, "<--- this is the res form the server, in handle add comp")

			setCompositions([data.composition, ...compositions]);
			//setLoading(false)
		} catch (err) {
			setError(err.messgae);
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

	// 
	async function getCompositions() {
		try {
			const data = await compositionApi.getAll()
			//console.log(data, "<--- this is the data")
			setCompositions([...data.compositions])
			//setLoading(false)
		} catch (err) {
			//console.log(err.message, "<-- this is the error")
			setError(err.message)
		}
	}

	useEffect(() => {
		getCompositions();
	}, [])

	return (
		<>
			{/*<Routes>
				<Route path="/update/:compId" element={<UpdateCompositionPage user={user} handleUpdateComposition={handleUpdateComposition} compositions={compositions} />} />
			</Routes>*/}
			<Grid columns="two" divided>
				<Grid.Row>
					<Grid.Column width="16">
						<PageHeader handleLogout={handleLogout} user={user} />
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column width="16">
						<Menu compositions={compositions} user={user} getCompositions={getCompositions} handleAddComposition={handleAddComposition} handleUpdateComposition={handleUpdateComposition} />
					</Grid.Column>
					{/*<Grid.Column>
						<Composition compositions={compositions} user={user} getCompositions={getCompositions} handleCompositionSelection={handleCompositionSelection} />
					</Grid.Column>*/}
				</Grid.Row>
			</Grid>
		</>
	)
}