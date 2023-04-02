const Buy = require('../models/Buy')
const mongoose = require('mongoose')
// get all buys
const getBuys = async(req, res) => {
	const buys = await Buy.find({}).sort({createdAt: -1})
	res.status(200).json(buys)
}


// get a single buy
const getBuy = async(req, res) => {
	const {id} = req.params

	if (!mongoose.Types.ObjectId.isValid(id)){
		return res.status(404).json({error: 'No such buy'})
	}

	const buy = await Buy.findById(id)

	if (!buy) {
		return res.status(404).json({error: 'No such buy'})
	}

	res.status(200).json(buy)
}

// create a buy
const createBuy = async (req, res) => {
	const {title, price, customer} = req.body

	// add doc to bd

	try {
		const buy = await Buy.create({title, price, customer})
		res.status(200).json(buy)
	} catch (error) {
		res.status(400).json({error: error.message})
	}
} 

// delete a buy
const deleteBuy = async (req, res) => {
	const {id} = req.params

	if (!mongoose.Types.ObjectId.isValid(id)){
		return res.status(404).json({error: 'No such buy'})
	}

	const buy = await Buy.findOneAndDelete({_id: id})

	if (!buy) {
		return res.status(400).json({error: 'No such buy'})
	}

	res.status(200).json(buy)
}

// update a buy
const updateBuy = async (req, res) => {
	const {id} = req.params

	if (!mongoose.Types.ObjectId.isValid(id)){
		return res.status(404).json({error: 'No such buy'})
	}

	const buy = await Buy.findOneAndUpdate({_id: id}, {...req.body})

	if (!buy) {
		return res.status(400).json({error: 'No such buy'})
	}

	res.status(200).json(buy)
}

module.exports = {
	getBuys,
	getBuy,
	createBuy,
	deleteBuy,
	updateBuy
}