// Require packages
const express = require('express');

const app = express();
const port = process.env.PORT || 8000;

// Serve HTML, JS and CSS...
app.use(express.static(`${__dirname}/public`));

// Request to anything...
app.get('*', (req,res) => {
  res.sendFile('index.html');
});

// Expresss listens on...
app.listen(port, () => {
  console.log(`Up and running on port: ${port}`);
});