// create web server
// create a server
const express = require("express");
const app = express();
const port = 3000;

// create a server
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// listen to port 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});