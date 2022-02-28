import React, { useState, createRef, useReducer, useEffect, useCallback } from 'react';
import { Modal, Rail, Ref, Segment, Sticky, Grid } from 'semantic-ui-react';
import "./Composition.css";
import _ from 'lodash'

import UpdateCompositionForm from '../UpdateCompositionForm/UpdateCompositionForm';


export default function Composition(props) {

	const [open, setOpen] = useState(false)
	const [state, setState] = useState('')

	//const [, updateState] = useState()
	//const forceUpdate = useCallback(() => updateState({}), [])



	console.log(props, "<--- props in composition component")

	// use state for autoscroll ?
	// initial is false
	// onclick of start button set to true, vice versa
	// when scroll = false call stopScroll(), vice versa

	// or if keep like this, the startscroll() needs to be stopped somehow
	// currently stopScroll() never gets hit (return statement?)
	const contextRef = createRef()


	// the idea here is that this 'simulates' state change, should trigger re-render
	//function reload() {
	//	console.log("reload invoked")
	//	forceUpdate()
	//	//setOpen(false);
	//}

	//function getComps() {
	//	console.log("getcomps invoked")
	//	props.getCompositions()

	//	let selectedComposition = props.compositions.filter(composition => props.selectedComposition._id === composition._id)
	//	setState({ selectedComposition })
	//}

	function getComps() {
		//props.selectComposition(props.selectedComposition)
		console.log("getcomps invoked")
		props.getCompositions()
	}

	//useEffect(() => {
	//	props.getCompositions()
	//}, [])

	// selected comp needs to be updated / state needs to be set to the updated v



	if (props.selectedComposition) {
		return (
			<div id="composition">
				<Grid columns={2}>
					<Grid.Column>
						<button onClick={() => { props.getCompositions(); }}>get 'em</button>
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
											trigger={<button id="edit-comp-btn">edit composition</button>}>
											<Modal.Header style={{ backgroundColor: "#1f2024", color: "white", fontFamily: "'Major Mono Display', monospace" }}>Edit - {props.selectedComposition.title}</Modal.Header>
											<Modal.Content style={{ backgroundColor: "#3a3b42" }}>
												<UpdateCompositionForm {...props}></UpdateCompositionForm>
												<Modal.Actions>
													<button content="Close Update Mode" id="close-modal-btn" onClick={() => { setOpen(false); props.getCompositions(); props.selectComposition(props.selectedComposition); }}>Close Update Mode</button>
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