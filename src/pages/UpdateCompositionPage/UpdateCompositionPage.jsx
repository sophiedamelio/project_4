import PageHeader from "../../components/Header/Header"
import UpdateCompositionForm from "../../components/UpdateCompositionForm/UpdateCompositionForm";

export default function UpdateCompositionPage({ user, handleUpdateComposition, compositions }) {
	//console.log(handleUpdateComposition, "<-- handle updae in update page")
	console.log(compositions, "<---  compositions in update page?")
	return (
		<>
			<PageHeader user={user}></PageHeader>
			<UpdateCompositionForm user={user} handleUpdateComposition={handleUpdateComposition} compositions={compositions}></UpdateCompositionForm>
		</>)
}