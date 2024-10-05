const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, '../')));

// Routes
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');

app.use('/shop', shopRoutes);
app.use('/contact', contactRoutes);

// Error handling for unmatched routes
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '../404.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
