const express = require('express')
const app = express()
const port = 3000

// Define a route
app.get('/', async (req, res) => {
  const response = await fetch('https://unpkg.com/using.run/dist/using.run.umd.js')
  const text = await response.text()
  res.set("Content-Type", "text/javascript")
  res.send(text)
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});