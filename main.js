const express = require('express');
const app = express();


const studentRoutes = require('./routes/students');
const courseRoutes = require('./routes/courses');

// Home Route
app.get('/', (req, res) => {
  res.send('Welcome to the Student ');
});

// Modular Routes
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);

// Custom 404 Handler
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Start Server
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
