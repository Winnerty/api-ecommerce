const express = require("express");
const app = express();
const port = 3000;
const test = require("./test")

// MIDDLEWARE
app.use((req, res, next) => {
    test()
    const val = 11 * 12 - 13
    req.val = val
    next()
})

app.get("/", (req, res) => {
    res.send(req.val.toString())
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});