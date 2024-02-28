const express = require('express')
const app = express()
const port = 3001
var osUtils = require('os-utils');
var os = require('os');
const fs = require('fs');
var bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid');
const schedule = require('node-schedule');

app.use(express.static('gcappsite/dist'));
app.use(bodyParser.text())
const jobFile = 'scheduledJobs.json';
const jobs = {}

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

app.get('/scheduled', (req, res) => {
  res.sendFile(__dirname + "/" + jobFile);
})

app.get("/usage24", (req, res) => {
  let data = fs.readFileSync('usage.json');

  res.send(data);
});

app.get('/:d', (req, res) => {
  res.sendFile(__dirname + '/gcappsite/dist/index.html')
});

app.post('/changeschedule', (req, res) => {
  const b = JSON.parse(req.body);

  const uuid = b.uuid;
  const newtime = b.time;


  const job = Object.values(jobs).find((j) => (j.juuid == uuid) );
  console.log(job.jendpoint);
  const endpoint = job.jendpoint;
  const body = job.jbody;
  removeJobDetails({url: endpoint, body: body, time: job.uuid, uuid: uuid})
  job.cancel();

  console.log(endpoint + ", " + body + ", " + newtime + ", " + uuid)
  saveJobDetails({url: endpoint, body: body, time: newtime, uuid: uuid});
  scheduleAction(endpoint, body, newtime, uuid);
  res.sendStatus(200);
})
app.post('/deleteschedule', (req, res) => {
  const b = JSON.parse(req.body);
  const uuid = b.uuid;

  const job = Object.values(jobs).find((j) => (j.juuid == uuid) );
  console.log(job.jendpoint);
  const endpoint = job.jendpoint;
  const body = job.jbody;
  removeJobDetails({url: endpoint, body: body, time: job.uuid, uuid: uuid})
  job.cancel();

  res.sendStatus(200);
})

app.post('/scheduleaction', (req, res) => {
  const b = JSON.parse(req.body);
  const endpoint = b.endpoint;
  const time = b.time;
  const body = b.body;
  const fullEndpoint = "https://greencanyonapp.com/api/" + endpoint;
  console.log(JSON.parse(body));
  const fullBody = JSON.parse(body);
  const uuid = uuidv4();
  saveJobDetails({url: fullEndpoint, body: fullBody, time: time, uuid: uuid});
  scheduleAction(fullEndpoint, fullBody, time, uuid);

  res.sendStatus(200);
});

function scheduleAction(fullEndpoint, fullBody, time, uuid) {
  if (new Date(time*1).getTime() > new Date().getTime()) {
    console.log("Scheduling action at " + new Date(time*1).toLocaleTimeString());
    const job = schedule.scheduleJob(new Date(time*1), function() {
      console.log(fullEndpoint + "\n" + JSON.stringify(fullBody), +"\n"+ time);
      purgePastJobsAndResave();
      fetch(fullEndpoint, {
        method: "POST",
        body: JSON.stringify(fullBody),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    });
    job.jendpoint = fullEndpoint;
    job.jbody = fullBody;
    job.jtime = time
    job.juuid = uuid;
    jobs[uuid] = job;
    console.log(jobs);
  } else {
    console.log("Time is before current date");
  }
}


// Function to purge past jobs and resave the list
function purgePastJobsAndResave() {
  if (fs.existsSync(jobFile)) {
    let jobs = JSON.parse(fs.readFileSync(jobFile));
    const currentTime = new Date();

    // Filter out jobs whose dateTime is less than the current time
    const updatedJobs = jobs.filter(job => new Date(job.time) > currentTime);

    // Resave the updated list to the file
    fs.writeFileSync(jobFile, JSON.stringify(updatedJobs, null, 2));
  }
}

// Save job details to a file
function saveJobDetails(jobDetails) {
  let jobb = [];
  if (fs.existsSync(jobFile)) {
    jobb = JSON.parse(fs.readFileSync(jobFile));
  }
  jobb.push(jobDetails);
  console.log("Writing: " + JSON.stringify(jobb, null, 2));
  fs.writeFileSync(jobFile, JSON.stringify(jobb, null, 2));
  // purgePastJobsAndResave();
}

function removeJobDetails(jobDetails) {
  let jobb = [];
  if (fs.existsSync(jobFile)) {
    jobb = JSON.parse(fs.readFileSync(jobFile));
  }
  // console.log("JOB DETAILS: " + JSON.stringify(jobDetails))
  jobb = jobb.filter(job => {console.log(job.uuid +","+jobDetails.uuid+","+(job.uuid != jobDetails.uuid)); job.uuid != jobDetails.uuid});
  console.log(jobb);
  // console.log(jobs);
  fs.writeFileSync(jobFile, JSON.stringify(jobb, null, 2));
  purgePastJobsAndResave();
}

loadAndRescheduleJobs();

// Load and reschedule jobs from file on startup
function loadAndRescheduleJobs() {
  if (fs.existsSync(jobFile)) {
    const jobs = JSON.parse(fs.readFileSync(jobFile));
    jobs.forEach(job => {
      console.log("Found jobs for " + job.url);
      scheduleAction(job.url, job.body, job.time, job.uuid);
    });
  }
}

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
    });
    


  } else {
    fs.writeFileSync('usage.json', '[]');
  }
}

setInterval(saveUsage, 1000 * 60 * 10);
saveUsage();

app.listen(port, () => {
  console.log(`GC App Site listening on port ${port}`)
})