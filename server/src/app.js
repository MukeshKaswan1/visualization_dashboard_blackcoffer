const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const { connectDB } = require('./utils/features.js');
require('dotenv').config(); 

const app = express();


app.use(cors());
app.use(express.json());

// database
const mongoURI = process.env.MONGODB_URI || "";
connectDB(mongoURI);
 
// Routes
app.use('/api', apiRoutes); 

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

