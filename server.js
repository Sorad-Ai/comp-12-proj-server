const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');  // Import the cors package
const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');

dotenv.config();

const app = express();
connectDB();

// Enable CORS with default options
// app.use(cors());
app.use(cors({
    origin: '*', // Allow any IP to access
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow all request methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allow necessary headers
}));


app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
