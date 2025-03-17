const express = require("express");
const app = express();
const port = 3000;
const userRoutes = require("./routes/users")

// MIDDLEWARE
app.use(express.json())

app.use("/api/users", userRoutes)

app.get("/", (req, res) => {
  res.send("Welcome to my API ! e-commerce backed 🤳")
 });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});