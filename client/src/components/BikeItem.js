import "../App.css"

const BikeItem = props => {
	return (
		<div className="card" key={props.bike._id}>
			<div className="bikeItem">
				<span className="align-items-center">
					{props.bike.name} / {props.bike.type} / ${props.bike.price}
				</span>
				{props.bike.isRented ? <>
					<button className="btn btn-info" onClick={() => { props.rentBike(props.bike._id) }}>Cancel rent</button>
				</>
					: <div>
						<button className="btn btn-warning" onClick={() => { props.rentBike(props.bike._id) }}>Rent</button>
						<button className="btn btn-danger" onClick={() => { props.deleteBike(props.bike._id) }}>Delete</button>
					</div>
				}
			</div>
		</div>
	)
}

export default BikeItem
