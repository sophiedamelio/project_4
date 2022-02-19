import React, { useState } from "react"
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import CompositionForm from "../CompositionForm/CompositionForm"
//import CompositionMiddle from "../CompositionMiddle/CompositionMiddle"
import { Link } from 'react-router-dom'

import AddCompositionPage from "../../pages/AddCompositionPage/AddCompositionPage"

export default function AddComposition(props) {

	//console.log(props, "<---- props on addcomp")


	return (
		<AddCompositionPage {...props}>
			<h1>Add compositon!</h1>
		</AddCompositionPage>
	)
}