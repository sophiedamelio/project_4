import React, { useState } from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import "./UpdateCompositionForm.css"

export default function UpdateCompositionForm(props) {
	console.log(props, "<=== props on update comp form")

	const navigate = useNavigate();

	const [selectedFile, setSelectedFile] = useState('')
	const [state, setState] = useState({
		title: props.selectedComposition.title,
		text: props.selectedComposition.text,
		notes: props.selectedComposition.notes
	})

	function handleFileInput(e) {
		setSelectedFile(e.target.files[0])
	}

	//console.log(selectedFile, "<--- selectedFile")

	function handleChange(e) {
		setState({
			...state,
			[e.target.name]: e.target.value
		})
	}

	function handleSubmit(e) {

		const infoFromTheForm = {
			title: state.title,
			text: state.text,
			photoUrl: selectedFile,
			notes: state.notes
		}
		console.log(infoFromTheForm, "<--- state in thre update form") // this is the proper state, updated
		// infofromtheform holds the correect, updated state
		//e.preventDefault()
		props.handleUpdateComposition(infoFromTheForm)
		//navigate('/')
	}

	// felete couild go here?
	console.log(state, "<--- state in updatecomp form")
	console.log(props.selectedComposition, "<--- selectedComp in update")
	// this should take the new / updated state from the comp form, and update the selectedComposition with the new state
	return (
		<>
			<Grid style={{ backgroundColor: "#3a3b42", margin: "none" }}>
				<Grid.Column>
					<div id="comp-form">
						<Segment style={{ backgroundColor: "#3a3b42", border: "none" }}>
							{/* props.handleDeleteComposition.bind(null, props.selectedComposition._id) */}
							{/* {props.handleUpdateComposition.bind(null, props.selectedComposition) */}
							{/*  update composition takes in the compId, and the forminfo(selectedComp object) */}
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
