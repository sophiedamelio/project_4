import { Image } from "semantic-ui-react"

export default function CompositionButton(props) {

	return (
		<>
			<button onClick={() => props.selectComposition(props.composition)}>{props.composition.title}</button>
			<Image src={props.composition.photoUrl} avatar />
		</>
	)

}