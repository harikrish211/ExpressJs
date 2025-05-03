// server.js
const express = require('express');
const app = express();

const PORT = 4000;

// Middleware to parse JSON (for future use if needed)
app.use(express.json());

// Routes
app.get('/products', (req, res) => {
  res.send('Here is the list of all products.');
});

app.post('/products', (req, res) => {
  res.send('A new product has been added.');
});

app.get('/categories', (req, res) => {
  res.send('Here is the list of all categories.');
});

app.post('/categories', (req, res) => {
  res.send('A new category has been created.');
});

// Wildcard Route (404)
app.all('*', (req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
