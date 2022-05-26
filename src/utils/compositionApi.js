import tokenService from "./tokenService"

const BASE_URL = '/api/compositions'

export function create(infoFromTheForm){
	return fetch(BASE_URL, {
		method: 'POST',
		body: JSON.stringify(infoFromTheForm), // <- infoFromTheForm has to be json
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken(), // including the JWT in the header
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	}).then(res => {
		// Valid login if we have a status of 2xx (res.ok)
		if (res.ok) return res.json();
		throw new Error('Error submitting the Form! Hey Check the Express Terminal'); // for development purposes
	})
}

export function update(compId, infoFromTheForm){
	return fetch(`${BASE_URL}/${compId}`, {
		method: 'PUT',
		body: JSON.stringify(infoFromTheForm),
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken(),
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	}).then(res => {
		if (res.ok) return res.json()
		throw new Error('Error updating the form! Check the express terminal')
	})
}


export function getAll() {
	return fetch(BASE_URL, {
		headers: {
		'Authorization': 'Bearer ' + tokenService.getToken()
		}
	})
	.then(res => {
		if(res.ok) return res.json()
		throw new Error('Problem Fetching Get All')
	})	
}

export function deleteComposition(compId) {
	return fetch(`${BASE_URL}/${compId}`, {
		method: 'DELETE',
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
			}
	}).then(res => {
		if (res.ok) return res.json()
		throw new Error('Error deleting the composition. Check the express terminal')
	})
}

