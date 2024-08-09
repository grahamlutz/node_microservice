const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/events', (req, res) => {
  const event = req.body;

  axios.post('https://localhost:4000/events', event).catch((err) => { console.log(err)});
  axios.post('https://localhost:4001/events', event).catch((err) => { console.log(err)});
  axios.post('https://localhost:4002/events', event).catch((err) => { console.log(err)});

  res.send({ stateud: 'OK' });
});

app.listen(4005, () => {
  console.log('listening on 4005');
})