import tokenService from "./tokenService"

const BASE_URL = '/api/compositions/'

export function create(infoFromTheForm){
	return fetch(BASE_URL, {
		method: 'POST',
		body: infoFromTheForm,
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
		}
	}).then(res=>{
		if(res.ok) return res.json()
		throw new Error('Error submitting the form!')
	})
}

export function getAll(){
	return fetch(BASE_URL, {
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
		}
	}).then(res => {
		if(res.ok) return res.json()
		throw new Error('Problem fetching Get All')
	})
}