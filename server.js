const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/api/products', (req, res) => {
    // This is a mock response, you would typically query a database here
    const products = [
        { name: 'Black Coffee', price: 7 },
        { name: 'Pure Coffee', price: 12 },
        { name: 'Milk Coffee', price: 9 }
    ];
    res.json(products);
});

// Catch-all route for any other requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
