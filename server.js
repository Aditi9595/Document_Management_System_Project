const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const documentRoutes = require('./routes/documentRoutes');

dotenv.config(); // Load environment variables  

const app = express();
app.use(express.json()); // Parse JSON bodies

// Route Middlewares
app.use('/api/auth', authRoutes); // For authentication
app.use('/api/documents', documentRoutes); // For document operations

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const defaultPort = 5000;

// Function to start the server on a dynamic port
const startServer = (port) => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is in use. Trying next port...`);
      startServer(port + 1); // Try next port
    } else {
      console.error('Server error:', err);
    }
  });
};

startServer(defaultPort);
