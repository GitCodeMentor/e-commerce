import express from "express"

const app = express()

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

export default app;
