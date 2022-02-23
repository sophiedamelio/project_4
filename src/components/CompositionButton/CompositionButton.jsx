import { useState } from "react"
import Composition from "../Composition/Composition"


export default function CompositionButton(props) {
	// props.handleCompositionSelection
	console.log(props.composition.notes, "<--- props")

	return <button key={props.composition._id} onClick={props.selectComposition} title={props.composition.title} text={props.composition.text} photoUrl={props.composition.photoUrl} notes={props.composition.notes}>{props.composition.title}</button>
}