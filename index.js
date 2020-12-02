const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
// const cors = require('cors')
const connectDB = require('./config/db')
// Load config
dotenv.config({path: './config/config.env'})

connectDB()
const app = express()
app.use(express.urlencoded({extended: false}))
app.use(express.json())
// app.use(cors())

// Routes
app.use('/', require('./api/index'))

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`))
