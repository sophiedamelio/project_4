import React from 'react';
import { Segment, Image } from 'semantic-ui-react';

export default function Composition({ getComposition, compositions, handleCompositionSelection, selectedComposition }) {
	//console.log("<--- props on composition")
	//console.log(handleCompositionSelection, "<---- handle comp selectionn")


	//console.log(compositions, "<--- compositions")
	//console.log(selectedComposition.attributes.getNamedItem('text').value, "<--- selected comp in comp")

	if (selectedComposition) {
		return (
			<>
				{/*<h1>{compositions[0].title}</h1>*/}
				<h3> {selectedComposition.title}</h3>
				<Image src={selectedComposition.attributes.getNamedItem('photoUrl').value} avatar />
				{/*if (selectedComposition.attributes.getNamedItem('text').value) {*/}
				<p>{selectedComposition.attributes.getNamedItem('text').value}</p>
				{/*}*/}
				{/*if (selectedComposition.attributes.getNamedItem('notes').value) {*/}
				<p>{selectedComposition.attributes.getNamedItem('notes').value}</p>
				{/*}*/}
			</>

		)
	}
	return null;
}