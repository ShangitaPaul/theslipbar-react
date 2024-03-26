// server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

// Dummy job data with location information
const jobs = [
  {
    id: 1,
    title: 'Bartender',
    description: 'Makes drinks and serves customers. Must be 21 or older.',
    location: 'Redondo Beach',
    email: 'info@theslipbar.com' // Email for applying to the job
  },
  {
    id: 2,
    title: 'Barback',
    description: 'Assists bartenders and keeps the bar stocked and clean.',
    location: 'Lomita',
    email: 'info@theslipbar.com' // Email for applying to the job
  },
  {
    id: 3,
    title: 'Host',
    description: 'Greets customers and seats them at tables.',
    location: 'Redondo Beach',
    email: 'info@theslipbar.com' // Email for applying to the job
  },
  {
    id: 4,
    title: 'Server',
    description: 'Takes orders, serves food and drinks to customers.',
    location: 'Redondo Beach',
    email: 'info@theslipbar.com' // Email for applying to the job
  },
  {
    id: 5,
    title: 'Kitchen Staff',
    description: 'Prepares and cooks food according to menu specifications.',
    location: 'Lomita',
    email: 'info@theslipbar.com' // Email for applying to the job
  },
  {
    id: 6,
    title: 'Bartender',
    description: 'Prepares and cooks food according to menu and safety specifications.',
    location: 'Lomita',
    email: 'info@theslipbar.com' // Email for applying to the job
  }
];

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/jobs', (req, res) => {
  res.json(jobs);
});

app.get('/jobs/:id', (req, res) => {
  const jobId = parseInt(req.params.id);
  const job = jobs.find(job => job.id === jobId);

  if (!job) {
    return res.status(404).json({ error: 'Job not found' });
  }

  res.json(job);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
