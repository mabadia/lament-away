import { useEffect, useState } from "react";
import { useHistory } from "react-router";

function BusinessIndex(data) {

	const history = useHistory()
	
	const [places, setPlaces] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:3000/places`)
			const resData = await response.json()
			setPlaces(resData)
		}
		fetchData()
	}, [])

	let businessFormatted = places.map((place) => {
		return (
			<div className="col-sm-6" key={place.placeId}>
				<h2>
					<a href="#" onClick={() => history.push(`/places/${place.placeId}`)} >
						{place.name}
					</a>
				</h2>
				<p className="text-center">
					{place.cuisines}
				</p>
				<img style={{ maxWidth: 200 }} src={place.pic} alt={place.name} />
				<p className="text-center">
					Located in {place.city}, {place.state}
				</p>
			</div>
		)
	})
	
	return (
		<main>
			<h1>Business to Lament About</h1>
			<div className="row">
				{businessFormatted}
			</div>
		</main>
	)
}

export default BusinessIndex;