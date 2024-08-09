const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/events', (req, res) => {
  const event = req.body;

  axios.post('http://localhost:4000/events', event)
    .then((res) => {console.log('Response: ', res)})
    .catch((err) => { console.log('Error: ', err)});
  axios.post('http://localhost:4001/events', event)
    .then((res) => {console.log('Response: ', res)})
    .catch((err) => { console.log(err)});
  axios.post('http://localhost:4002/events', event)
    .then((res) => {console.log('Response: ', res)})
    .catch((err) => { console.log(err)});

  res.send({ stateud: 'OK' });
});

app.listen(4005, () => {
  console.log('listening on 4005');
})