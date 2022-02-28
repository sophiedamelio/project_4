import React, { useState, createRef } from 'react';
import { Modal, Rail, Ref, Segment, Sticky, Grid } from 'semantic-ui-react';
import "./Composition.css";
import _ from 'lodash'

import UpdateCompositionForm from '../UpdateCompositionForm/UpdateCompositionForm';


export default function Composition(props) {

	const [open, setOpen] = useState(false)

	console.log(props, "<--- props in composition component")


	const contextRef = createRef()

	if (props.selectedComposition) {

		return (
			<div id="composition">
				<Grid columns={2}>
					<Grid.Column>
						<Ref innerRef={contextRef}>
							<Segment style={{ backgroundColor: '#3a3b42', border: 'none' }}>
								{_.times(1, (i) => (
									<>
										<div id="comp-header">
											<span><h3 id="title">{props.selectedComposition.title}</h3></span>
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
									</>
								))}
								<Rail position="right">
									<Sticky context={contextRef}>
										<button id="scroll-button" onClick={props.pageScroll}>auto-scroll</button>
									</Sticky>
								</Rail>
							</Segment>
						</Ref>
					</Grid.Column>
				</Grid>
			</div >
		)
	}
	return null;
}