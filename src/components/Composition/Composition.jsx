import React, { useState, createRef } from 'react';
import { Modal, Rail, Ref, Segment, Sticky, Grid, Form } from 'semantic-ui-react';
import "./Composition.css";
import _ from 'lodash'

import UpdateComposition from '../UpdateCompositionForm/UpdateCompositionForm';


export default function Composition(props) {

	const [open, setOpen] = useState(false)

	console.log(props, "<--- props in composition component")

	// use state for autoscroll ?
	// initial is false
	// onclick of start button set to true, vice versa
	// when scroll = false call stopScroll(), vice versa

	// or if keep like this, the startscroll() needs to be stopped somehow
	// currently stopScroll() never gets hit (return statement?)
	const contextRef = createRef()

	// this creates a default selected composition, if there are compositions
	if (!props.selectedComposition && props.compositions) {
		props.selectComposition(props.compositions[0])
	}

	if (props.selectedComposition) {
		return (
			<div id="composition">
				<Grid columns={2}>
					<Grid.Column>
						<Ref innerRef={contextRef}>
							<Segment id="segment-composition" style={{ backgroundColor: '#3a3b42', border: 'none' }}>
								{_.times(1, (i) => (
									<div key={props.selectedComposition._id}>
										<div id="comp-header">
											<span><h3 id="title">{props.selectedComposition.title}</h3></span>
										</div>
										{props.selectedComposition.capo ? <p>Capo: {props.selectedComposition.capo}</p> : null}
										<p>{props.selectedComposition.text}</p>
										{props.selectedComposition.notes ?
											<p id="notes"><span id="notes-label">notes: <br></br></span>{props.selectedComposition.notes}</p>
											: null}
										<Modal
											style={{ borderRadius: "20px" }}
											onClose={() => setOpen(false)}
											onOpen={() => setOpen(true)}
											open={open}
											//as={Form}
											//onSubmit={e => props.handleUpdateComposition(e)}
											closeOnDocumentClick={true}
											trigger={<button id="edit-comp-btn">edit composition</button>}>
											<Modal.Header style={{ backgroundColor: "#1f2024", color: "white", fontFamily: "'Major Mono Display', monospace" }}>Edit - {props.selectedComposition.title}</Modal.Header>
											<Modal.Content style={{ backgroundColor: "#3a3b42" }}>
												<UpdateComposition setOpen={setOpen} {...props}></UpdateComposition>
												<Modal.Actions>
													{/*<button content="Close Update Mode" id="close-modal-btn" onClick={() => { setOpen(false); props.getCompositions(); props.selectComposition(props.selectedComposition); }}>Close Update Mode</button>*/}
												</Modal.Actions>
											</Modal.Content>
										</Modal>
										{/* I use .bind so that I can pass an argument into the handleDeleteComposition function inline */}
										<button id="delete-comp-btn" onClick={props.handleDeleteComposition.bind(null, props.selectedComposition._id)}>Delete Composition</button>
									</div>
								))}
								<Rail position="right">
									<Sticky context={contextRef}>
										<button id="start-scroll-button" onClick={props.startPageScroll}>start auto-scroll</button>
										<button id="stop-scroll-button" onClick={props.stopPageScroll}>stop auto-scroll</button>
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