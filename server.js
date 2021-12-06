const express = require("express")
const fs = require("fs")

const app = express()

app.get("/", (req, res) => {
  fs.createReadStream("index.html").pipe(res)
})

app.get("/annoy.js", (req, res) => {
  fs.createReadStream("annoy.js").pipe(res)
})

app.get("/beluga.webp", (req, res) => {
  fs.createReadStream("beluga.webp").pipe(res)
})

app.listen(8000)
console.log("express app running at http://localhost:8000")