const express = require("express")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT || 9000

app.get("/", (req, res) => {
  res.status(200).json({success: true, response: "Test app running"})
})

app.listen(PORT, () => {
  console.log("app running on port", PORT)
})