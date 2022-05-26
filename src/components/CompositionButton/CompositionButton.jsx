import "./CompositionButton.css"

export default function CompositionButton(props) {

  return (
    <>
      <button id="comp-button" onClick={() => { props.selectComposition(props.composition); }}>{props.composition.title}</button>
    </>
  )

}