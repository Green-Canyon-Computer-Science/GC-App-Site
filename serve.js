const express = require('express')
const app = express()
const port = 3001
var osUtils = require('os-utils');
var os = require('os');

app.use(express.static('gcappsite/dist'));

app.get("/usage", (req, res) => {
  osUtils.cpuUsage(function(v){
    const json = JSON.stringify({
      "cpu": v,
      "totalmem": os.totalmem(),
      "freemem": os.freemem(),
    });

    res.send(json);
  });
});

app.get('/:d', (req, res) => {
  res.sendFile(__dirname + '/gcappsite/dist/index.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})