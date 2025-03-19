const express = require('express');
const app = express();
const path = require('path');
const data = require('./data/data.json');

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to fetch JSON data
app.get('/api/data', (req, res) => {
  res.json(data);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
