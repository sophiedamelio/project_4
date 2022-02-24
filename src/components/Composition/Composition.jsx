import React from 'react';
import { Segment, Image, Button } from 'semantic-ui-react';
import "./Composition.css";

import { Link } from 'react-router-dom';

export default function Composition({ getCompositions, compositions, handleCompositionSelection, selectedComposition, user, composition }) {
	console.log(composition, "<--- props on composition")
	//console.log(handleCompositionSelection, "<---- handle comp selectionn")


	//console.log(compositions, "<--- compositions")
	//console.log(selectedComposition.attributes.getNamedItem('text').value, "<--- selected comp in comp")

	//console.log(selectedComposition.attributes.getNamedItem('id').value, "<-- -user in composition")

	if (selectedComposition) {
		return (
			<div id="composition">
				{/*// this is the logged in user currently, not the user of the post*/}
				{/*<h3>User: {selectedComposition.attributes.getNamedItem('username').value} </h3>
				< h3 > Title: {selectedComposition.title}</h3 >
				<Image src={selectedComposition.attributes.getNamedItem('photourl').value} avatar />
				<p>{selectedComposition.attributes.getNamedItem('text').value}</p>
				<p>Notes: {selectedComposition.attributes.getNamedItem('notes').value}</p>
				<Link to={{ pathname: "update/" + selectedComposition.attributes.getNamedItem('id').value, state: { selectedComposition } }} >Edit Composition</Link>*/}
				{/*<Button onClick='' color="red">Delete Composition</Button>*/}
			</div >
		)
	}
	return null;
}