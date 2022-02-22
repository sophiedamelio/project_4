//import AddComposition from "../AddComposition/AddComposition"
import { useState, useEffect } from "react"
import { Button, Grid, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import AddComposition from '../AddComposition/AddComposition';
import AddCompositionPage from "../../pages/AddCompositionPage/AddCompositionPage"
import Composition from '../Composition/Composition';
import CompositionButton from "../CompositionButton/CompositionButton"
import { Route, Routes } from 'react-router-dom';


export default function Menu({ user, handleAddComposition, getComposition, compositions }) {
	//console.log(user, handleAddComposition, "<--- props on menu")
	//console.log(compositions, "<--- compositions on menu")
	//console.log(handleCompositionSelection, "<--- handle com selection")

	const [selectedComposition, setSelectedComposition] = useState('')
	const [error, setError] = useState('')
	// set selected composition state here, then send to composition component

	function handleCompositionSelection(e) {
		try {
			e.preventDefault()
			console.log(e.currentTarget, "<--- e.ytarget in handle funct")
			//const data = e.target.value
			//console.log(data, "<--- composition in handle func")
			setSelectedComposition({
				//...selectedComposition,
				[e.currentTarget.name]: e.currentTarget.value
			})

		} catch (err) {
			setError(err.message)
		}
		//return (
		//	<Composition composition={composition} />
		//)
	}

	useEffect(() => {
		handleCompositionSelection()
	}, [])



	return (
		<>
			<h1>menu!</h1>
			<Grid columns="two" divided>
				<Grid.Row>
					<Grid.Column>

						{compositions ?
							<>
								{compositions.map((composition) => {
									return (
										<ul>
											{/*//<Link to="/:comp_id">*/}
											{/*// when you click on one of these, it should display in full in the composition component (update the composition component)
							// onclick of a sem UI (like Card,content) could be a function that updates the composition comp?*/}
											<li><CompositionButton composition={composition} handleCompositionSelection={handleCompositionSelection} /></li>
											{/*//</Link>*/}
										</ul>
									)
								})}
							</>
							: null}
						<Link to="/addComposition">
							Add Composition
						</Link>
					</Grid.Column>
					<Grid.Column>
						<Composition selectedComposition={selectedComposition} handleCompositionSelection={handleCompositionSelection} />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</>
	)
}