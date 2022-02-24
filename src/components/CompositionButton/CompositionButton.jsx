import { useState } from "react"
import Composition from "../Composition/Composition"
import { Link } from "react-router-dom";

import { Button, Image } from "semantic-ui-react"


export default function CompositionButton(props) {
	// props.handleCompositionSelection

	//function isMatch(composition) {
	//	return composition._id === props.selectedComposition._id
	//}

	//console.log((props.composition.find(isMatch)), "<-- props on compositionbutton")


	return (
		<>
			<Link to={{ pathname: "/", state: { composition: props.composition }, }} onClick={props.selectComposition}>{props.composition.title}</Link>
			<Image src={props.composition.photoUrl} avatar />
		</>
	)

}