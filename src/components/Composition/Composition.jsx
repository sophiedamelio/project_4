import React from 'react';
import { Segment, Image, Button } from 'semantic-ui-react';
import "./Composition.css";

export default function Composition({ getComposition, compositions, handleCompositionSelection, selectedComposition }) {
	//console.log("<--- props on composition")
	//console.log(handleCompositionSelection, "<---- handle comp selectionn")


	//console.log(compositions, "<--- compositions")
	//console.log(selectedComposition.attributes.getNamedItem('text').value, "<--- selected comp in comp")

	if (selectedComposition) {
		return (
			<div id="composition">
				< h3 > Title: {selectedComposition.title}</h3 >
				<Image src={selectedComposition.attributes.getNamedItem('photoUrl').value} avatar />
				<p>{selectedComposition.attributes.getNamedItem('text').value}</p>
				<p>Notes: {selectedComposition.attributes.getNamedItem('notes').value}</p>
				<a href="/"><Button>Edit Composition</Button></a>
			</div >
		)
	}
	return null;


}