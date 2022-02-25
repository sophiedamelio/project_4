import { Image } from "semantic-ui-react"

export default function CompositionButton(props) {
	//console.log(props.selectComposition, "<-- select comp function in button")
	//console.log(props.composition, "<=== composition")
	return (
		<>
			<button onClick={() => props.selectComposition(props.composition)}>{props.composition.title}</button>
			<Image src={props.composition.photoUrl} avatar />
		</>
	)

}