const express = require("express");
const app = express();
const port = process.env.PORT || 3000
const userRoutes = require("./routes/users")
const path = require("path")

//Connect to DB
const connectDB = require("./utils/db")

// MIDDLEWARE
app.use(express.json())

// cors middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
   "Access-Control-Allow-Headers",
   "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  )
  next()
 })

connectDB()

app.use("/api/users", userRoutes)

app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})