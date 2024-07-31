const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Additional route
app.get('/about', (req, res) => {
    res.send('About Page');
  });

  
// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
