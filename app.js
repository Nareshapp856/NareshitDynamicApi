const express = require('express');
const app = express();

// Use the PORT environment variable provided by Azure
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Node.js on Azure!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
