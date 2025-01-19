const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

require('dotenv').config();

const PORT = process.env.PORT || 5000;


const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);

const server = http.createServer(app);

console.log('Connecting to Database.....')
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('Database connected successfully')
  console.log('Connecting to Server.....')
  server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}).catch(err => {
  console.log(`Database connection failed: ${err}`)
})