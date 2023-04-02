require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const buysRoutes = require('./routes/buys')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req,res,next) => {
	console.log(req.path, req.method)
	next()
})

// routes
app.use('/api/buys', buysRoutes)

// connect to DB
mongoose.connect(process.env.MONGO_URI)
	.then(() => {

		// listen for requests
		app.listen(process.env.PORT, () =>{
		console.log('connected to DB & listening on PORT ' + process.env.PORT)
		})
		
	})
	.catch((error) => {
		console.log(error)
	})

process.env