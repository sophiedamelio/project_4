import React, { useState, createRef } from 'react';
import { Modal, Rail, Ref, Segment, Sticky, Grid, Icon, Radio, Form } from 'semantic-ui-react';

import UpdateComposition from '../UpdateCompositionForm/UpdateCompositionForm';

import "./Composition.css";

// this is a test for the dev branch

export default function Composition(props) {

	const [open, setOpen] = useState(false)

	//const [speedModalOpen, setSpeedModalOpen] = useState(false)

	const [state, setState] = useState(2)

	let scrollerID;
	let paused = true;
	let speed = state.value; // 1 - Fast | 2 - Medium | 3 - Slow
	let interval = speed * 25;

	function startPageScroll() {
		let id = setInterval(function (s) {
			window.scrollBy(0, s || 1);
			//javascript:setInterval(function(s){scrollBy(0,s||1)},75)
			// refactor this to work
			//if ((window.innerHeight + window.scrollY) >= Menu.offsetHeight) {
			//	// Reached end of page
			//	stopPageScroll();
			//}
		}, interval);
		return id;
	}

	function stopPageScroll() {
		clearInterval(scrollerID);
	}

	function scroll() {
		if (paused === true) {
			scrollerID = startPageScroll();
			paused = false;
		}
		else {
			stopPageScroll();
			paused = true;
		}
	}

	const contextRef = createRef()

	// form things for the speed of sutoscroll 'form' elem
	function handleChange(e, { value }) {
		setState({ value });
		setOpen(false);
		stopPageScroll();
		paused = true;
	}

	function handleSubmit(e) {
		e.preventDefault();
		startPageScroll();
		paused = false;
		//setSpeedModalOpen(false)
	}
	// end speed of autoscroll stuff


	// this creates a default selected composition, if there are compositions
	if (!props.selectedComposition && props.compositions) {
		props.selectComposition(props.compositions[0])
	}

	if (props.selectedComposition) {
		return (
			<div id="composition">
				<Grid columns={2}>
					<Grid.Row style={{ paddingBottom: "10vh" }}>
						<Ref innerRef={contextRef}>
							<Segment id="segment-composition" style={{ backgroundColor: '#3a3b42', border: 'none', boxShadow: 'none' }}>
								<Grid.Column>
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
											trigger={<button id="edit-comp-btn">edit song</button>}>
											<Modal.Header style={{ backgroundColor: "#1f2024", color: "white", fontFamily: "'Major Mono Display', monospace" }}>Edit - {props.selectedComposition.title}</Modal.Header>
											<Modal.Content style={{ backgroundColor: "#3a3b42" }}>
												<UpdateComposition setOpen={setOpen} {...props}></UpdateComposition>
											</Modal.Content>
										</Modal>
										{/* I use .bind so that I can pass an argument into the handleDeleteComposition function inline */}
										<button id="delete-comp-btn" onClick={props.handleDeleteComposition.bind(null, props.selectedComposition._id)}>delete song</button>
									</div>
								</Grid.Column>
								<Grid.Column>
									<Rail position="right">
										<Sticky context={contextRef}>
											<button id="start-scroll-button" onClick={scroll}>
												<Icon name="play"></Icon>
												auto-scroll
											</button>
											{/*<button id="speed-button">*/}
											{/*<Modal
												id="speed-modal"
												onClose={() => setSpeedModalOpen(false)}
												onOpen={() => setSpeedModalOpen(true)}
												//speedModalOpen={speedModalOpen}
												dimmer={false}
												trigger={<button id="speed-button">speed</button>}
												style={{ borderRadius: "10px" }}
											>
												<Modal.Header style={{ backgroundColor: "#1f2024", color: "white", fontFamily: "'Major Mono Display', monospace" }}>Auto-scroll speed:</Modal.Header>
												<Modal.Content style={{ backgroundColor: "#3a3b42" }}>*/}
											<Form onSubmit={handleSubmit} style={{ padding: '2rem', width: '20vh', margin: '2vh 2vh 2vh 5vh' }}>
												<Form.Field>
													<Radio
														class="radio"
														name="radioGroup"
														value="1"
														checked={state.value === "1"}
														onChange={handleChange}
													/>
													<label class="radio" style={{ color: "white" }}>fast</label>
												</Form.Field>
												<Form.Field>
													<Radio
														class="radio"
														name="radioGroup"
														value="2"
														checked={state.value === "2"}
														onChange={handleChange}
													/>
													<label class="radio" style={{ color: "white" }}>medium</label>
												</Form.Field>
												<Form.Field>
													<Radio
														class="radio"
														name="radioGroup"
														value="3"
														checked={state.value === "3"}
														onChange={handleChange}
													/>
													<label class="radio" style={{ color: "white" }}>slow</label>
												</Form.Field>
												{/*fast <Radio toggle onClick={() => speed = 1} />
												medium <Radio toggle onClick={() => speed = 2} />
												slow <Radio toggle onClick={() => speed = 3} />*/}
												<button id="speed-button" type="submit">Save</button>
												{/*onClick={setSpeedModalOpen(false)*/}
											</Form>
											{/*</Modal.Content>*/}
											{/*</Modal>*/}
											{/*</button>*/}
										</Sticky>
									</Rail>
								</Grid.Column>
							</Segment>
						</Ref>
					</Grid.Row>
				</Grid>
			</div >
		)
	}
	return null;
}