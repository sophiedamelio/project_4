import React, { useEffect, useState } from "react";
import PageHeader from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"
import * as compositionApi from "../../utils/compositionApi";
import { Grid } from "semantic-ui-react";

import "./HomePage.css"

export default function HomePage({ user, handleLogout, }) {
	const [compositions, setCompositions] = useState([])
	const [error, setError] = useState('')

	// this is to set up my default composition
	const firstComposition = compositions[0];
	console.log(firstComposition, "<--- first comp")

	const [selectedComposition, setSelectedComposition] = useState('')

	function startPageScroll() {
		window.scrollBy(0, 1);
		let scrolldelay = setTimeout(startPageScroll, 10);
	}

	function stopPageScroll() {
		window.scrollBy(0, 0)
		let scrolldelay = setTimeout(stopPageScroll, 10);
		//window.onscroll
	}

	// set selected composition state here, then send to composition component
	function selectComposition(composition) {
		setSelectedComposition(composition) // comp that was clicked on
	}

	async function handleUpdateComposition(infoFromTheForm) {
		try {
			const data = await compositionApi.update(selectedComposition._id, infoFromTheForm);
			//console.log(selectedComposition, "<--- selected comp in the homepage handle update func")
			//console.log(data, "<--- data is updated comp in handleupdate homepage")

			// this line filters all the 'unchanged' compositions into a new array
			let unchangedCompositions = (compositions.filter((comp) => comp._id !== selectedComposition._id))
			//console.log(unchangedCompositions, "<--- unchanged comps in update in home") // this works

			setCompositions([data, ...unchangedCompositions]);

			//compositions are being set properly, just need to re-render now
			console.log(compositions, "<--- compositions in the handle update, homepage")

			// why doesn't this line work to re-render?
			//setSelectedComposition(selectedComposition);

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
			console.log(data, "<--- this is the res form the server, in handle add comp")

			setCompositions([data.composition, ...compositions]);
		} catch (err) {
			setError(err.messgae);
		}
	}

	async function getCompositions() {
		try {
			const data = await compositionApi.getAll()
			setCompositions([...data.compositions])
		} catch (err) {
			console.log(err.message, "<-- this is the error")
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
					<Grid.Row>
						<Grid.Column >
							<PageHeader handleLogout={handleLogout} user={user} />
						</Grid.Column>
					</Grid.Row>
				</div>

				<Grid.Row>
					<Grid.Column >
						<Menu stopPageScroll={stopPageScroll} startPageScroll={startPageScroll} compositions={compositions} selectComposition={selectComposition} selectedComposition={selectedComposition} user={user} getCompositions={getCompositions} handleAddComposition={handleAddComposition} handleUpdateComposition={handleUpdateComposition} handleDeleteComposition={handleDeleteComposition} />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	)
}