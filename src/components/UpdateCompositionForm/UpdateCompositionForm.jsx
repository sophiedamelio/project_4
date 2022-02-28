import React, { useState, useEffect, useReducer } from 'react'
import { Form, Grid, Segment } from 'semantic-ui-react';
import "./UpdateCompositionForm.css"

export default function UpdateCompositionForm(props) {

	console.log(props, "<--- props in update form")

	const [selectedFile, setSelectedFile] = useState('')
	const [state, setState] = useState({
		_id: props.selectedComposition._id,
		title: props.selectedComposition.title,
		text: props.selectedComposition.text,
		notes: props.selectedComposition.notes
	})

	function handleFileInput(e) {
		setSelectedFile(e.target.files[0])
	}

	function handleChange(e) {
		setState({
			...state,
			[e.target.name]: e.target.value
		})
	}

	function handleSubmit(e) {
		e.preventDefault()

		const infoFromTheForm = new FormData()
		console.log(state, "<--- state in handlesubmit update comp")

		infoFromTheForm.append('_id', state._id)
		infoFromTheForm.append('photo', selectedFile);
		infoFromTheForm.append('title', state.title);
		infoFromTheForm.append('text', state.text);
		infoFromTheForm.append('notes', state.notes);

		//console.log(infoFromTheForm, "<--- state in thre update form") // this is the proper state, updated

		props.handleUpdateComposition(infoFromTheForm)
		// update state here as well, this should be re-rendering I believe
		setState({ ...state, infoFromTheForm })

	}

	//useEffect(() => {
	//	props.selectComposition(props.selectedComposition)
	//}, [])


	return (
		<>
			<Grid style={{ backgroundColor: "#3a3b42", margin: "none" }}>
				<Grid.Column>
					<div id="comp-form">
						<Segment style={{ backgroundColor: "#3a3b42", border: "none" }}>
							<Form autoComplete="off" onSubmit={handleSubmit}>
								<Form.Input id="form-input" placeholder="Title" className="form-control" name="title" value={state.title} onChange={handleChange} required />
								<Form.TextArea id="text-input" rows={20} placeholder="Text" className="form-control" name="text" value={state.text} onChange={handleChange} required />
								<Form.Input id="form-input" placeholder="Notes" className="form-control" name="notes" value={state.notes} onChange={handleChange} required />
								<Form.Input id="form-input" placeholder="Upload Image" type="file" className="form-control" name="photo" onChange={handleFileInput} required />
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
