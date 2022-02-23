import React, { useState } from 'react'
//import Header from "../Header/Header"
import { Button, Form, Grid, GridColumn, Segment } from 'semantic-ui-react';
import { useNavigate, Link, useParams } from 'react-router-dom';

import { useForm } from "react-hook-form"

//import { yupResolver } from "@hookform/resolvers/yup"
//import * as Yup from "yup";
//import { userService, alertService } from '@/_services'


export default function UpdateCompositionForm(props) {
	//console.log(props.compositions, "<=== props on addcomp form")
	//get the value of the selected form from a query using the compId in the url?
	const compId = useParams().compId
	console.log(compId, "<--- id from params?") // this successfully gets the id of the comp from the url
	//console.log(props.compositions, "<--- composition?")

	// this should use the 'id' var on line 16 to query all compositions, find the one where composition.id === id
	const selectCompositionData = props.compositions.filter(composition => composition._id === compId)

	//console.log(selectCompositionData[0].title, "<-- selected comp data") // this data now needs to fill in to the form, the data is correct
	const [selectedFile, setSelectedFile] = useState('')

	const [state, setState] = useState({
		title: '',
		text: '',
		notes: ''
	})
	//const [state, setState] = useState({
	//	title: selectCompositionData[0].title,
	//	text: selectCompositionData[0].text,
	//	notes: selectCompositionData[0].notes
	//})



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

		props.handleUpdateComposition(formData)
		navigate('/')
	}
	//console.log(state, "<-- state in comp form")



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