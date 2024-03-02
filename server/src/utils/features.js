const mongoose = require("mongoose");

// Assuming myCache is defined elsewhere
// const { myCache } = require("../app.js");

const Data = require("../models/Data"); // Correct import statement

const connectDB = (uri) => {
    mongoose
        .connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => { 
            console.log(`DB Connected to ${mongoose.connection.host}`);
        })
        .catch((e) => {
            console.error("DB Connection Error:", e.message);
            // Handle error gracefully
        });
};

module.exports = { connectDB };
