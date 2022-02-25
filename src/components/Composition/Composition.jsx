import React, { useState } from 'react';
import { Segment, Image, Button, Modal } from 'semantic-ui-react';
import "./Composition.css";

import { Link, useLocation } from 'react-router-dom';
import UpdateCompositionForm from '../UpdateCompositionForm/UpdateCompositionForm';

export default function Composition(props) {

	const [open, setOpen] = useState(false)

	console.log(props.selectedComposition, "<--- composition???")

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
				<Button color="red">Delete Composition</Button>
			</div >
		)
	}
	return null;
}