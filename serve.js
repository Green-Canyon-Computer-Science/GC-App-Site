const express = require('express')
const app = express()
const port = 3001

app.use(express.static('gcappsite/dist'));

app.get('/:d', (req, res) => {
  res.sendFile(__dirname + '/gcappsite/dist/index.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})