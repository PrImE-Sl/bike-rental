

const express = require("express")
const router = express.Router()


const BikeSchema = require("./bike-model")

router.get("/", async (req, res) => {
	await BikeSchema.find({}, (error, bikes) => {
		if (error) {
			return res.status(400).json({ success: false, error })
		}
		if (!bikes.length) {
			return res.status(404).json(error)
		}
		return res.status(200).json(bikes)
	}).catch(err => console.log(err))
})

router.post("/", (req, res) => {
	const body = req.body
	if (!body) {
		return res.status(400).json({ success: false, error: 'You should provide a bike', })
	}
	const newBike = new BikeSchema({
		name: body.name,
		price: body.price,
		type: body.type,
		isRented: body.isRented,
	})
	newBike
		.save()
		.then(bike => res.json(bike))
		.catch(err => res.status(400).json("Post Error: " + err))
})

router.put("/:id", (req, res) => {
	const _id = req.body._id

	const bike = {
		name: req.body.name,
		price: req.body.price,
		type: req.body.type,
		isRented: req.body.isRented,
	}

	BikeSchema.findByIdAndUpdate(_id, bike, { new: true }, (error, bike) => {
		if (error) {
			console.log("Put error", error)
			res.status(500).send(error)
		} else {
			res.send(bike)
		}
	})
})

router.delete("/:id", (req, res) => {
	BikeSchema.findById(req.params.id).then(bike =>
		bike
			.remove()
			.then(() => {
				res.json({ success: true })
			})
			.catch(error => res.status(404).json({ success: false }))
	)
})


module.exports = router


