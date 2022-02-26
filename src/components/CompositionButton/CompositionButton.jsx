import { Image } from "semantic-ui-react"
import "./CompositionButton.css"

export default function CompositionButton(props) {
	//console.log(props.selectComposition, "<-- select comp function in button")
	//console.log(props.composition, "<=== composition")
	return (
		<>
			<button id="comp-button" onClick={() => props.selectComposition(props.composition)}>{props.composition.title}</button>
			{/*<Image src={props.composition.photoUrl} avatar />*/}
		</>
	)

}