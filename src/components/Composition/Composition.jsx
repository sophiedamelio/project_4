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
				<div id="comp-header">
					<h3 id="title">{props.selectedComposition.title}</h3>
					<Image src={props.selectedComposition.photoUrl} avatar className="comp-img" />
				</div>
				<p>{props.selectedComposition.text}</p>
				<p id="notes"><span id="notes-label">notes: <br></br></span>{props.selectedComposition.notes}</p>
				<Modal
					style={{ borderRadius: "20px" }}
					onClose={() => setOpen(false)}
					onOpen={() => setOpen(true)}
					open={open}
					trigger={<button id="edit-comp-btn">edit composition</button>}>
					<Modal.Header style={{ backgroundColor: "#1f2024", color: "white", fontFamily: "'Major Mono Display', monospace" }}>Edit - {props.selectedComposition.title}</Modal.Header>
					<Modal.Content style={{ backgroundColor: "#3a3b42" }}>
						<UpdateCompositionForm {...props}></UpdateCompositionForm>
						<Modal.Actions>
							<button content="Close Update Mode" id="close-modal-btn" onClick={() => setOpen(false)} >Close Update Mode</button>
						</Modal.Actions>
					</Modal.Content>
				</Modal>
				{/*  do I want to pass the selectedComposition to this function> */}
				<button id="delete-comp-btn" onClick={props.handleDeleteComposition.bind(null, props.selectedComposition._id)}>Delete Composition</button>
			</div >
		)
	}
	return null;
}