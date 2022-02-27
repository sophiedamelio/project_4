import React, { useState } from 'react';
import { Grid, Image, Modal } from 'semantic-ui-react';
import "./Composition.css";

import UpdateCompositionForm from '../UpdateCompositionForm/UpdateCompositionForm';

export default function Composition(props) {

	const [open, setOpen] = useState(false)

	//console.log(props, "<--- composition???")

	if (props.selectedComposition) {
		return (
			<div id="composition">
				<div id="comp-header">
					<Grid>
						<Grid.Row>
							<Grid.Column width="10">
								<span><h3 id="title">{props.selectedComposition.title}</h3></span>
							</Grid.Column>
							<Grid.Column width="6">
								<Image src={props.selectedComposition.photoUrl} avatar />
							</Grid.Column>
						</Grid.Row>
					</Grid>
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
				{/* I use .bind so that I can pass an argument into the handleDeleteComposition function inline */}
				<button id="delete-comp-btn" onClick={props.handleDeleteComposition.bind(null, props.selectedComposition._id)}>Delete Composition</button>
			</div >
		)
	}
	return null;
}