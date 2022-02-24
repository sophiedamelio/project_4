import React from 'react';
import { Segment, Image, Button } from 'semantic-ui-react';
import "./Composition.css";

import { Link, useLocation } from 'react-router-dom';

export default function Composition(props) {
	//let location = useLocation();

	//let stateData = props.location.state
	//var composition = stateData["composition"]

	console.log(props.selectedComposition, "<--- composition???")
	//if selectedComposition._id === composition._id?



	if (props.selectedComposition) {
		return (
			<div id="composition">
				<p>{props.selectedComposition.title}</p>
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