const express = require("express");
const app = express();
const cors = require ('cors');
const fetch = require ('node-fetch');

app.use (express.json ());
app.listen (4000, () => {
  console.log ('Server is starting in port 4000');
});
