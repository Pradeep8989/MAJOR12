const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());


// connect DB
mongoose.connect("mongodb+srv://admin:Admin123@cluster0.sbsmmle.mongodb.net/energyDB?appName=Cluster0")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// routes
const energyRoutes = require('./routes/energyRoutes');
app.use('/', energyRoutes);
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});