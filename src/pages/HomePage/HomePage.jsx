import React, { useEffect, useState, useCallback } from "react";
import PageHeader from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"
import * as compositionApi from "../../utils/compositionApi";
import { Grid } from "semantic-ui-react";

import "./HomePage.css"
import { useNavigate } from "react-router-dom";

export default function HomePage({ user, handleLogout, }) {
	const [compositions, setCompositions] = useState([])
	const [error, setError] = useState('')

	const navigate = useNavigate()

	// this is to set up my default composition
	const firstComposition = compositions[0];
	console.log(firstComposition, "<--- first comp")

	const [selectedComposition, setSelectedComposition] = useState('')
	//_id: firstComposition._id,
	//user: firstComposition.user,
	//title: firstComposition.title,
	//capo: firstComposition.capo,
	//text: firstComposition.text,
	//notes: firstComposition.notes
	//compositions[0]
	//}

	console.log(selectedComposition, "<--- initial selected comp")


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

			// this line filters all the 'unchanged' compositions into a new array
			let unchangedCompositions = (compositions.filter((comp) => comp._id !== selectedComposition._id))

			// this line should trigger re-render?
			setCompositions([data, ...unchangedCompositions]);

			//compositions are being set properly, just need to re-render now
			//console.log(compositions, "<--- compositions in the handle update, homepage")

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
			//console.log(data, "<--- this is the res form the server, in handle add comp")

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


	// another attempt at forcing reload
	//const [, updateState] = useState()
	//const forceUpdate = useCallback(() => updateState({}), [])

	//console.log("log from home on reload?")


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
						{/*<button onClick={forceUpdate}>reload</button>*/}
						<Menu stopPageScroll={stopPageScroll} startPageScroll={startPageScroll} compositions={compositions} selectComposition={selectComposition} selectedComposition={selectedComposition} user={user} getCompositions={getCompositions} handleAddComposition={handleAddComposition} handleUpdateComposition={handleUpdateComposition} handleDeleteComposition={handleDeleteComposition} />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	)
}