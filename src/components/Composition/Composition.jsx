import React from 'react';
import { Segment } from 'semantic-ui-react';

export default function Composition({ getComposition, compositions, handleCompositionSelection, selectedComposition }) {
	//console.log("<--- props on composition")
	//console.log(handleCompositionSelection, "<---- handle comp selectionn")


	//console.log(compositions, "<--- compositions")
	console.log(selectedComposition, "<--- selected comp in comp")


	return (
		<>
			{/*<h1>{compositions[0].title}</h1>*/}
			<h3>{selectedComposition.getAttribute('title')}</h3>
			<h3>{selectedComposition.getAttribute('text')}</h3>
			<img src={selectedComposition.getAttribute('photoUrl')} alt="photo of selected composition" />
			<h3>{selectedComposition.getAttribute('notes')}</h3>
		</>
	)
}