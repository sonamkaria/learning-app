// Dependencies
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const courseController = require("./controllers/courses")

// Pulls environment vars into serv er js from .env
require('dotenv').config()

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Database Connection Logs
const db = mongoose.connection
db.on("error", (err) => console.log(err.message))
db.on("connected", () => console.log("mongo connected"))
db.on("disconnected", () => console.log("mongo disconnected"))

//MIDDLEWARE
// Body Parser middleware - give us access to req.body
app.use(express.urlencoded({ extended: true }))
// captures (post) requests for put and delete and convertes them from a post
app.use(methodOverride("_method"))
// Use the courses controller for course routes
app.use("/courses", courseController)
app.use( express.static('public'))

// Listener
app.listen(PORT, ()=> console.log(`You are listening to the smoothe sounds of port ${PORT}...`))