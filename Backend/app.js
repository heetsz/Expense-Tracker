const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000
const connectDB = require("./config/connectionDB")
connectDB()


const expensesRoute = require("./routes/expenses.route")
app.use("/api/expenses", expensesRoute)


app.listen(port, (err) => {
      console.log(`Server Running: http://localhost:${port}`)
})