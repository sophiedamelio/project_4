import React, { useState } from "react"
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import CompositionForm from "../CompositionForm/CompositionForm"
//import CompositionMiddle from "../CompositionMiddle/CompositionMiddle"
import { Link } from 'react-router-dom'

export default function AddComposition(props) {

	console.log(props, "<---- props on addcomp")


	return (
		<Link to="/addComposition">
			<CompositionForm {...props}>
				<h1>Add compositon!</h1>
			</CompositionForm>
		</Link>

	)
}