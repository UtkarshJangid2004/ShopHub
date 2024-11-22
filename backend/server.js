const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/config');
const categoryRoutes = require('./routes/category.routes')
const productRoutes = require('./routes/product.routes')

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/categories',categoryRoutes );
app.use('/api/products',productRoutes );

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
