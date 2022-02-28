import tokenService from "./tokenService"

const BASE_URL = '/api/compositions'

export function create(infoFromTheForm){
	// Make a post request to the server
	return fetch(BASE_URL, {
		method: 'POST',
		// We are sending over a picture
		// multipart/form-data < - is the content type
		body: JSON.stringify(infoFromTheForm), // <- postInfoFromTheForm has to be formData
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken(),
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	}).then(res => {
		// Valid login if we have a status of 2xx (res.ok)
		if (res.ok) return res.json();
		throw new Error('Error submitting the Form! Hey Check the Express Terminal');
	})
}

export function update(compId, infoFromTheForm){
	return fetch(`${BASE_URL}/${compId}`, {
		method: 'PUT',
		body: infoFromTheForm,
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
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

