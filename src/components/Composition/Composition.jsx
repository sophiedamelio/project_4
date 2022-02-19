import React from 'react';
import { Segment } from 'semantic-ui-react';

export default function Composition({ getComposition, compositions }) {
	//console.log("<--- props on composition")


	console.log(compositions, "<--- compositions")
	if (compositions) {
		return (
			<>
				{compositions.map((composition) => {
					return (
						<h1>{composition.title}</h1>
					)
				})}
			</>
		)
	}

	return (
		<h1>no compositions yet</h1>
	)

}