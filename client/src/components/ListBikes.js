import { useEffect } from "react"
import BikeItem from "./BikeItem"
import { connect } from "react-redux"
import { getBikes, deleteBike, rentBike } from "../redux/actions"
import "../App.css"

const ListBikes = props => {

	const { bikes } = props.bikes
	const rentBikes = bikes.filter(bike => !!bike.isRented)
	const availableBikes = bikes.filter(bike => !bike.isRented)

	const rentBike = id => { props.rentBike(id) }
	const deleteBike = id => { props.deleteBike(id) }

	const rentSum = rentBikes.reduce((sum, bike) => {
		return sum + bike.price
	}, 0)

	useEffect(() => {
		props.getBikes()
	}, [])

	return (
		<div>
			<h2 className='rents'>Your rent (Total: ${rentSum})</h2>

			<ul className="list-group">
				{rentBikes.length ? (
					rentBikes.map(bike => {
						return <BikeItem key={bike._id} bike={bike} rentBike={rentBike} />
					})
				) : <span>No available bicycles...</span>}
			</ul>

			<h2 className='rents'>Available bicycles ({availableBikes.length})</h2>
			<ul className="list-group">
				{availableBikes.length
					? availableBikes.map(bike => {
						return <BikeItem key={bike._id} bike={bike} rentBike={rentBike} deleteBike={deleteBike} />
					})
					: <span>No available bicycles...</span>
				}
			</ul>
		</div>
	)
}

const mapStateToProps = state => {
	return { bikes: state.bikes }
}

export default connect(mapStateToProps, { getBikes, deleteBike, rentBike })(ListBikes)
