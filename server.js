const express = require("express")
var path = require("path")
const cors = require("cors")
const corsOpts = {
  origin: /myfrontend.com:3000/,
  allowedHeaders: [],
}
const app = express()
app
  .get("/service", cors(corsOpts), (req, res) => {
    res.send(`hello, ${req.get("origin")}`)
    console.log(JSON.stringify(req.headers, null, "  "))
  })
  .get("/", cors(corsOpts), (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"))
  })
  .options("*", cors(corsOpts))
const server = app.listen(3000, () => {
  console.log(`server listening on port ${server.address().port}`)
})
