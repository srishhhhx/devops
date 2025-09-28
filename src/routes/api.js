const express = require('express');
const router = express.Router();

// Basic API routes
router.get('/test', (req, res) => {
  res.json({ 
    message: 'API is working!', 
    timestamp: new Date().toISOString() 
  });
});

router.get('/status', (req, res) => {
  res.json({ 
    status: 'operational',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development'
  });
});

module.exports = router;
