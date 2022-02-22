import { useState } from "react"


export default function CompositionButton(props) {
	// props.handleCompositionSelection
	const [selectedComposition, setSelectedComposition] = useState('')


	function selectComposition(e) {
		console.log(e, "<-- e in select comp, in comp button")
		setSelectedComposition(e.target) // comp that was clicked on
	}
	return <button key={props.composition._id} onClick={selectComposition}>{props.composition.title}</button>
}