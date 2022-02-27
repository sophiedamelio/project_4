import React, { useState } from 'react'
import { Form, Grid, Segment } from 'semantic-ui-react';

import "./CompositionForm.css"

export default function AddCompositionForm(props) {

	const [selectedFile, setSelectedFile] = useState('')
	const [state, setState] = useState({
		title: '',
		text: '',
		notes: ''
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

		const formData = new FormData()

		formData.append('photo', selectedFile);
		formData.append('title', state.title);
		formData.append('text', state.text);
		formData.append('notes', state.notes);

		props.handleAddComposition(formData)
	}

	console.log(state, "<-- state in comp form")

	return (
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
								Add composition
							</button>
						</Form>
					</Segment>
				</div>
			</Grid.Column>
		</Grid>
	)
}