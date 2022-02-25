import React, { useState } from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

export default function UpdateCompositionForm(props) {
	console.log(props, "<=== props on update comp form")

	const navigate = useNavigate()

	const [selectedFile, setSelectedFile] = useState('')
	const [state, setState] = useState({
		title: props.selectedComposition.title,
		text: props.selectedComposition.text,
		notes: props.selectedComposition.notes,
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

		props.handleUpdateComposition(formData)
		navigate('/')
	}

	// this should take the new / updated state from the comp form, and update the selectedComposition with the new state

	return (
		<>
			<Grid>
				<Grid.Column>
					<Segment>
						<Form autoComplete="off" onSubmit={handleSubmit}>
							<Form.Input placeholder="Title" className="form-control" name="title" value={state.title} onChange={handleChange} required />
							<Form.TextArea rows={20} placeholder="Text" className="form-control" name="text" value={state.text} onChange={handleChange} required />
							<Form.Input placeholder="Notes" className="form-control" name="notes" value={state.notes} onChange={handleChange} required />
							<Form.Input placeholder="Upload Image" type="file" className="form-control" name="photo" onChange={handleFileInput} required />
							<Button type="submit" className="btn">
								Update Composition
							</Button>
						</Form>
					</Segment>
				</Grid.Column>
			</Grid>
		</>
	)
}