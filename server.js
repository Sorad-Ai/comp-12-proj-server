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
    origin: '*', // Allow access from any domain/IP
    methods: '*', // Allow all HTTP methods (GET, POST, PUT, DELETE, etc.)
    allowedHeaders: '*', // Allow all headers
    exposedHeaders: '*' // Allow all headers to be exposed
}));


app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
