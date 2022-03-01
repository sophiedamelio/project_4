import React, { useState, useEffect, useReducer } from 'react'
import { Form, Grid, Segment } from 'semantic-ui-react';

import { getAll } from "../../utils/compositionApi"

import "./UpdateCompositionForm.css"

export default function UpdateCompositionForm(props) {

	console.log(props, "<--- props in update form")

	const [state, setState] = useState({
		_id: props.selectedComposition._id,
		title: props.selectedComposition.title,
		capo: props.selectedComposition.capo,
		text: props.selectedComposition.text,
		notes: props.selectedComposition.notes
	})

	//const [selectedComposition, setSelectedComposition] = useState('')

	function handleChange(e) {
		setState({
			...state,
			[e.target.name]: e.target.value
		})
	}

	function handleSubmit(e) {
		e.preventDefault()
		props.handleUpdateComposition(state)

		// set selected composition gain, here
		// filter array of comps, for the one that matches props.selected._id === 
		// return array with one object in it
		// select that one and set state to equal that one we found

		let selectedComposition = props.compositions.filter(composition => props.selectedComposition._id === composition._id)

		//console.log(state._id, "<--- selectedComposition")
		//console.log(props.selectedComposition._id, "<--- selectedComposition")
		//console.log(selectedComposition, "<--- selectedCOMPPPP")
		//setState({ selectedComposition })

		//props.setOpen(false)
		props.getCompositions()
		// the argument here maybe should be selectedComposiiton, not props.
		props.selectComposition(props.selectedComposition)
		props.setOpen(false) // just changed from props.selectedComposition

		//console.log(state, "<--- state in update comp") // this is correct
		// update state here as well? this should be re-rendering I believe
		//setState({ ...state })
	}

	//props.selectComposition(props.selectedComposition)

	return (
		<>
			<Grid style={{ backgroundColor: "#3a3b42", margin: "none" }}>
				<Grid.Column>
					<div id="comp-form">
						<Segment style={{ backgroundColor: "#3a3b42", border: "none" }}>
							<Form autoComplete="off" onSubmit={handleSubmit}>
								<Form.Input id="form-input" placeholder="Title" className="form-control" name="title" value={state.title} onChange={handleChange} required />
								<Form.Input id="form-input" placeholder="Capo" className="form-control" name="capo" value={state.capo} onChange={handleChange} />
								<Form.TextArea id="text-input" rows={20} placeholder="Text" className="form-control" name="text" value={state.text} onChange={handleChange} required />
								<Form.Input id="form-input" placeholder="Notes" className="form-control" name="notes" value={state.notes} onChange={handleChange} />
								<button type="submit" className="btn" onClick={() => { props.getCompositions(); props.selectComposition(state); }}>
									Update Composition
								</button>
							</Form>
						</Segment>
					</div>
				</Grid.Column>
			</Grid>
		</>
	)
}
