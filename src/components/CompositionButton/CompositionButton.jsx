import { useState } from "react"
import Composition from "../Composition/Composition"

import { Button, Image } from "semantic-ui-react"


export default function CompositionButton(props) {
	// props.handleCompositionSelection
	//console.log(props.composition.user.username, "<--- props")

	return (
		<>
			<button key={props.composition._id} onClick={props.selectComposition} username={props.composition.user.username} title={props.composition.title} text={props.composition.text} photourl={props.composition.photoUrl} notes={props.composition.notes}>{props.composition.title}</button>
			<Image src={props.composition.photoUrl} avatar />
		</>
	)

}