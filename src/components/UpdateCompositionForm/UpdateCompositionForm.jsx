import React, { useState } from 'react'
import { Form, Grid, Segment } from 'semantic-ui-react';


import "./UpdateCompositionForm.css"

export default function UpdateCompositionForm(props) {

	const [state, setState] = useState({
		_id: props.selectedComposition._id,
		title: props.selectedComposition.title,
		capo: props.selectedComposition.capo,
		text: props.selectedComposition.text,
		notes: props.selectedComposition.notes
	})

	function handleChange(e) {
		setState({
			...state,
			[e.target.name]: e.target.value
		})
	}

	function handleSubmit(e) {
		e.preventDefault()
		props.handleUpdateComposition(state)

		// add in notes to explain this
		props.getCompositions()
		props.selectComposition(state)
		props.setOpen(false)
		props.getCompositions()

	}


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
								<button type="submit" className="btn">
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
