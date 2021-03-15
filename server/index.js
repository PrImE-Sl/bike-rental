const express = require("express")
const db = require('./db')
const bodyParser = require('body-parser')  //Отвечает за отключение тела от сетевых запросов
const bikesRouter = require("./bike-router")
const app = express()

app.use(express.json())

db.on('error', console.error.bind(console, 'MongoDB connection error'))

app.use("/api/bikes", bikesRouter)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const apiPort = process.env.PORT || 6666

app.listen(apiPort, () => { console.log(`Server is running on port ${apiPort}`) })
