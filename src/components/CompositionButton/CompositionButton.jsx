import "./CompositionButton.css"

export default function CompositionButton(props) {

	//console.log(props, "<--- props on comp button")
	return (
		<>
			<button id="comp-button" onClick={() => { props.selectComposition(props.composition); props.getCompositions(); }}>{props.composition.title}</button>
		</>
	)

}