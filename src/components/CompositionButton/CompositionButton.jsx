
export default function CompositionButton(props) {
	return <button key={props.composition._id} onClick={props.handleCompositionSelection}>{props.composition.title}</button>
}