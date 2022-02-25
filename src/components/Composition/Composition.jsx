import React, { useState } from 'react';
import { Segment, Image, Button, Modal } from 'semantic-ui-react';
import "./Composition.css";

import { Link, useLocation } from 'react-router-dom';
import UpdateCompositionForm from '../UpdateCompositionForm/UpdateCompositionForm';

export default function Composition(props) {
	//let location = useLocation();

	const [open, setOpen] = useState(false)
	//let stateData = props.location.state
	//var composition = stateData["composition"]

	console.log(props.selectedComposition, "<--- composition???")
	//if selectedComposition._id === composition._id?



	if (props.selectedComposition) {
		return (
			<div id="composition">
				<h3> Title: {props.selectedComposition.title}</h3>
				<Image src={props.selectedComposition.photoUrl} avatar />
				<p>{props.selectedComposition.text}</p>
				<p>Notes: {props.selectedComposition.notes}</p>
				<Modal
					onClose={() => setOpen(false)}
					onOpen={() => setOpen(true)}
					open={open}
					trigger={<Button>Edit Composition</Button>}>
					<Modal.Header>Edit - {props.selectedComposition.title}</Modal.Header>
					<Modal.Content>
						<UpdateCompositionForm {...props}></UpdateCompositionForm>
						<Modal.Actions>
							<Button content="Close Update Mode" onClick={() => setOpen(false)} />
						</Modal.Actions>
					</Modal.Content>
				</Modal>
				{/*<Link to={{ pathname: "update/" + props.selectedComposition._id, state: { selectedComposition: props.selectedComposition } }} ></Link>*/}
				{/*<Button onClick='' color="red">Delete Composition</Button>*/}
			</div >
		)
	}
	return null;
}