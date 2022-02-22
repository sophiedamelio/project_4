import React, { useState } from 'react'
import Header from "../Header/Header"
import { Button, Form, Grid, GridColumn, Segment } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';


export default function AddCompositionForm(props) {

	console.log(props, "<=== props on addcomp form")

	const [selectedFile, setSelectedFile] = useState('')
	const [state, setState] = useState({
		title: '',
		text: '',
		notes: ''
	})

	const navigate = useNavigate()

	function handleFileInput(e) {
		setSelectedFile(e.target.files[0])
	}

	//console.log(selectedFile, "<---- sleected file")

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

		//console.log(formData, "<--- formdata in comp form")

		props.handleAddComposition(formData)
		navigate('/')

	}
	console.log(state, "<-- state in comp form")



	return (
		<>
			<Grid>
				<Grid.Column>
					<Segment>
						<Form autoComplete="off" onSubmit={handleSubmit}>
							<Form.Input placeholder="Title" className="form-control" name="title" value={state.title} onChange={handleChange} required />
							<Form.Input placeholder="Text" className="form-control" name="text" value={state.text} onChange={handleChange} />
							<Form.Input placeholder="Notes" className="form-control" name="notes" value={state.notes} onChange={handleChange} />
							<Form.Input placeholder="Upload Image" type="file" className="form-control" name="photo" onChange={handleFileInput} required />
							<Button type="submit" className="btn">
								Add composition
							</Button>
						</Form>
					</Segment>
				</Grid.Column>
			</Grid>
		</>
	)
}