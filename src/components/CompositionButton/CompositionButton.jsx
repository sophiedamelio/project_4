import { useState } from "react"
import Composition from "../Composition/Composition"
import { Link } from "react-router-dom";

import { Button, Image } from "semantic-ui-react"


export default function CompositionButton(props) {
	// props.handleCompositionSelection
	//console.log(props.selectComposition, "<--- props")

	return (
		<>
			<Link to={{ pathname: "/", state: { composition: props.composition }, }} onClick={props.selectComposition} >{props.composition.title}</Link>
			<Image src={props.composition.photoUrl} avatar />
		</>
	)

}