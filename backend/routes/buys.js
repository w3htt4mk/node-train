const express = require('express')
const { 
	createBuy,
	getBuys,
	getBuy,
	deleteBuy,
	updateBuy,
} = require('../controllers/buyController')

const router = express.Router()

// GET all buys
router.get('/', getBuys)

// GET a single buy
router.get('/:id', getBuy)

// POST a new buy
router.post('/', createBuy)

// DELETE a buy
router.delete('/:id', deleteBuy)

// UPDATE a new buy
router.patch('/:id', updateBuy)

module.exports = router