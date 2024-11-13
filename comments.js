// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Define comments
const comments = [
    { name: 'John', comment: 'Hello World!' },
    { name: 'Mary', comment: 'Goodbye World!' }
];

// Define routes
app.get('/', (request, response) => {
    response.send('Hello World!');
});

app.get('/comments', (request, response) => {
    response.json(comments);
});

// Start server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});