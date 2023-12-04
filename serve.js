const express = require('express')
const app = express()
const port = 3001
var osUtils = require('os-utils');
var os = require('os');
const fs = require('fs');

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

app.get("/usage24", (req, res) => {
  let data = fs.readFileSync('usage.json');

  res.send(data);
});

app.get('/:d', (req, res) => {
  res.sendFile(__dirname + '/gcappsite/dist/index.html')
});

// Function to prune data older than 24 hours
function pruneOldData(data) {
  const cutoffTime = new Date().getTime() - 24 * 60 * 60 * 1000; // 24 hours ago
  return data.filter(entry => new Date(entry.timestamp).getTime() > cutoffTime);
}

function saveUsage() {
  if (fs.existsSync('usage.json')) {
    let data = JSON.parse(fs.readFileSync('usage.json'));
    osUtils.cpuUsage(function(v){
      data.push({
        "cpu": v,
        "totalmem": os.totalmem(),
        "freemem": os.freemem(),
        "timestamp": Date.now()
      });

      data = pruneOldData(data);
      fs.writeFileSync('usage.json', JSON.stringify(data, null, 2));
      console.log(data);
    });
    


  } else {
    fs.writeFileSync('usage.json', '[]');
  }
}

setInterval(saveUsage, 1000 * 60 * 10);
saveUsage();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})