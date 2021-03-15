const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://viacheslav:password1234@cluster0.axaij.mongodb.net/bike?retryWrites=true&w=majority', {
	keepAlive: true,
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true
})
	.catch(e => {
		console.error('Connection error...', e.message)
	})

mongoose.set("useFindAndModify", false);

const db = mongoose.connection

module.exports = db