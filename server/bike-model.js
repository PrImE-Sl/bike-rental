const mongoose = require("mongoose")
const Schema = mongoose.Schema

const BikeSchema = new Schema(
	{
		name: { type: String, required: true },
		price: { type: Number, required: true },
		type: { type: String, required: true },
		isRented: { type: Boolean, required: true }
	}
)

module.exports = mongoose.model("bike", BikeSchema)