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
				{/*<h3>User: {props.selectedComposition.user.username} </h3>*/}
				<h3> Title: {props.selectedComposition.title}</h3>
				<Image src={props.selectedComposition.photoUrl} avatar />
				<p>{props.selectedComposition.text}</p>
				<p>Notes: {props.selectedComposition.notes}</p>
				<Link to={{ pathname: "update/" + props.selectedComposition._id, state: { selectedComposition: props.selectedComposition } }} >Edit Composition</Link>
				{/*<Button onClick='' color="red">Delete Composition</Button>*/}
			</div >
		)
	}
	return null;
}