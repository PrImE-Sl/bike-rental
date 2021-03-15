import { useState } from "react"
import { connect } from "react-redux"
import { createBike } from "../redux/actions"

const CreateBike = (props) => {
	const [state, setState] = useState({ name: "", price: "", type: "Custom", isRented: false })

	const inputHandler = event => {
		setState(state => ({
			...state, ...{ [event.target.name]: event.target.value },
		}))
	}

	const sendFormHandler = event => {
		event.preventDefault()
		const newBike = {
			name: state.name,
			type: state.type,
			price: +state.price,
			isRented: state.isRented,
		}

		if (state.price > 1) {
			props.createBike(newBike)
		} else {
			return alert('Price can`t be less then 1$');
		}

		setState({ name: "", price: "", type: "custom", isRented: false })
	}

	return (
		<div>
			<h1 className='mainTitle'>Awesome Bike Rental</h1>
			<h2>Create new rent</h2>
			<form className="form" onSubmit={sendFormHandler}>
				<div className="formInput">
					<p> Bike name </p>
					<input type="text" className="form-control" name="name" id="name" value={state.name} placeholder="bike name" onChange={inputHandler} required />
				</div>

				<div className="formInput">
					<p>Bike Type</p>
					<select id="type" name="type" value={state.type} className="form-control" onChange={inputHandler}>
						<option value="Custom">Custom</option>
						<option value="Roads">Roads</option>
						<option value="Mountain">Mountain</option>
						<option value="Cyclocross">Cyclocross</option>
					</select>
				</div>

				<div className="formInput">
					<p> Rent Price </p>

					<input id="price" name="price" type="number" placeholder="rent price" className="form-control" value={state.price} onChange={inputHandler} required />
				</div>
				<button type="submit" className="btn btn-success">Submit rent</button>
			</form>
		</div>
	)
}

const mapStateToProps = (state) => {
	return { bikes: state.bikes }
}

export default connect(mapStateToProps, { createBike })(CreateBike)
