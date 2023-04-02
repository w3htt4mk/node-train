const mongoose = require('mongoose')

const Schema = mongoose.Schema

const buySchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	customer: {
		type: String,
		required: true,
	},
}, {timestamps: true})

module.exports = mongoose.model('Buy', buySchema)

