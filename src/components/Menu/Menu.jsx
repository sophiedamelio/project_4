//import AddComposition from "../AddComposition/AddComposition"
import { Button, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import AddComposition from '../AddComposition/AddComposition';
import Composition from '../Composition/Composition';


export default function Menu({ user, handleAddComposition, getComposition, compositions }) {
	//console.log(user, handleAddComposition, "<--- props on menu")
	//console.log(compositions, "<--- compositions on menu")
	return (
		<>
			<h1>menu!</h1>
			<AddComposition user={user} handleAddComposition={handleAddComposition}>
				Add Composition
			</AddComposition>
			<Composition getComposition={getComposition} compositions={compositions}></Composition>
		</>
	)
}