import React, { useEffect, useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Composition from "../../components/Composition/Composition"
import PageHeader from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";

import * as compositionApi from "../../utils/compositionApi";
import { Grid } from "semantic-ui-react";
import AddCompositionForm from "../../components/CompositionForm/CompositionForm";
import AddComposition from "../../components/AddComposition/AddComposition";


export default function AddCompositionPage(props) {

	console.log(props, "<-- props on addComp page")

	//const [compositions, setCompositions] = useState([])
	//const [error, setError] = useState('');

	//async function handleAddComposition(composition) {
	//	try {
	//		//setLoading(true);
	//		const data = await compositionApi.create(composition);

	//		setCompositions([data.composition, ...compositions]);
	//		//setLoading(false);
	//	} catch (err) {
	//		setError(err.message)
	//		console.log(err)
	//	}
	//}

	return (
		<>
			<PageHeader {...props}></PageHeader>
			<AddComposition {...props}></AddComposition>
		</>)
}