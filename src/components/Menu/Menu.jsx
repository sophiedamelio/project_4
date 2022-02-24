//import AddComposition from "../AddComposition/AddComposition"
import { useState } from "react"
import { Button, Grid, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import Composition from '../Composition/Composition';
import CompositionButton from "../CompositionButton/CompositionButton"


export default function Menu({ user, handleAddComposition, getCompositions, compositions }) {

	const [error, setError] = useState('')
	const [selectedComposition, setSelectedComposition] = useState('')

	// set selected composition state here, then send to composition component

	function selectComposition(composition) {
		// this function currently returns the HTML element that is selected, the <button>
		// I want it to grab the composition that corresponds with the button
		// I think the composition button itself may be the issue, since it just renders, the title ?
		// this function should select the ENTIRE composition that corresponds with the button

		console.log(composition, "<--- e .target in menu")

		setSelectedComposition(composition) // comp that was clicked on
	}


	return (
		<>
			<h1>menu!</h1>
			<Grid columns="two" divided>
				<Grid.Row>
					<Grid.Column width="4">
						{compositions ?
							<>
								<ul>
									{compositions.map((composition) => {

										//console.log(composition, "<-- composition in map")
										return (
											/*//<Link to="/:comp_id">*/
											//{/*// when you click on one of these, it should display in full in the composition component (update the composition component)
											// onclick of a sem UI (like Card,content) could be a function that updates the composition comp?*/}
											<li key={composition._id} >
												<CompositionButton composition={composition} selectComposition={selectComposition} />
											</li>
											/*//</Link>*/
										)
									})}
								</ul>
							</>
							: null}

						{/* this add composition needs to be a modal, not a link . 
						It should make the <AddCompositionForm> pop up, upon clicking submit, I want to see that composition ad the selected comp? or just the homepage again*/}
						<Link to="/addComposition">
							Add Composition
						</Link>
					</Grid.Column>
					<Grid.Column width="12">
						<Composition selectedComposition={selectedComposition} user={user} compositions={compositions} />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</>
	)
}