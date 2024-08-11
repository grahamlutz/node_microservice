const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const events = [];

app.post('/events', (req, res) => {
  const event = req.body;

  events.push(event);

  axios.post('http://posts-clusterip-srv:4000/events', event)
    .then((res) => {console.log('Response: ', res)})
    .catch((err) => { console.log('Error: ', err)});
  axios.post('http://comments-srv:4001/events', event)
    .then((res) => {console.log('Response: ', res)})
    .catch((err) => { console.log(err)});
  axios.post('http://query-srv:4002/events', event)
    .then((res) => {console.log('Response: ', res)})
    .catch((err) => { console.log(err)});
  axios.post('http://moderation-srv:4003/events', event)
    .then((res) => {console.log('Response: ', res)})
    .catch((err) => { console.log(err)});


  res.send({ stateud: 'OK' });
});

app.get('/events', (req, res) => {
  res.send(events);
})

app.listen(4005, () => {
  console.log('listening on 4005');
})