import { useState } from "react"
import { Grid, Modal } from 'semantic-ui-react';

import Composition from '../Composition/Composition';
import CompositionButton from "../CompositionButton/CompositionButton"
import AddCompositionForm from "../CompositionForm/CompositionForm";

import "./Menu.css"

export default function Menu({ user, getCompositions, selectComposition, selectedComposition, handleAddComposition, compositions, handleUpdateComposition, handleDeleteComposition }) {

	const [open, setOpen] = useState(false)

	return (
		<div className="whole-page">
			<Grid columns="two" divided>
				<Grid.Row>
					<Grid.Column width="4">
						<div id="menu-content">
							<h1 id="home-title">my songs</h1>
							{compositions ?
								<>
									<ul id="menu-list">
										{compositions.map((composition) => {
											return (
												<li key={composition._id} >
													<CompositionButton getCompositions={getCompositions} composition={composition} selectComposition={selectComposition} />
												</li>
											)
										})}
									</ul>
								</>
								: null}
							<Modal
								style={{ borderRadius: "20px" }}
								onClose={() => setOpen(false)}
								onOpen={() => setOpen(true)}
								open={open}
								trigger={<button id="add-comp-btn">add song</button>}>
								<Modal.Header className="modal-header" style={{ backgroundColor: "#1f2024", color: "white", fontFamily: "'Major Mono Display', monospace" }}>add a song</Modal.Header>
								<Modal.Content style={{ backgroundColor: "#3a3b42" }}>
									<AddCompositionForm setOpen={setOpen} selectComposition={selectComposition} handleAddComposition={handleAddComposition}></AddCompositionForm>
								</Modal.Content>
							</Modal>
						</div>
					</Grid.Column>
					<Grid.Column width="12">
						<Composition selectComposition={selectComposition} selectedComposition={selectedComposition} user={user} compositions={compositions} handleUpdateComposition={handleUpdateComposition} handleDeleteComposition={handleDeleteComposition} getCompositions={getCompositions} />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div >
	)
}