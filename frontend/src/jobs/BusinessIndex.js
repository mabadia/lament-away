import { useEffect, useState } from "react";
import { useHistory } from "react-router";

function BusinessIndex(data) {

	const history = useHistory()
	
	const [business, setBusiness] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:3000/jobs`)
			const resData = await response.json()
			setBusiness(resData)
		}
		fetchData()
	}, [])

	let businessFormatted = business.map((business) => {
		return (
			<div className="col-sm-6" key={business.businessId}>
				<h2>
					<a href="#" onClick={() => history.push(`/jobs/${business.businessId}`)} >
						{business.name}
					</a>
				</h2>
				<p className="text-center">
					This location is located at {business.address} in {business.city}, {business.state}
				</p>
				{/* <img style={{ maxWidth: 200 }} src={business.pic} alt={business.name} /> */}
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