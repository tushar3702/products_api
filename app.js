const dotenv = require('dotenv');
const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const products_routes = require('./routes/products');

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;

// Middleware to parse JSON (important for POST/PUT requests)
app.use(express.json());

// Middleware or set router
app.use("/api/products", products_routes);

// Start server function
const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.log("Error connecting to DB:", error.message);
    }
};

start();
