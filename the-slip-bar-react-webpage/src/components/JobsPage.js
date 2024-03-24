// JobsPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobList from './JobList';
import JobDetail from './JobDetail';
import './JobsPage.css';

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/jobs');
        setJobs(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  const handleJobClick = jobId => {
    const job = jobs.find(job => job.id === jobId);
    setSelectedJob(job);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Job Search</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <JobList jobs={jobs} handleJobClick={handleJobClick} />
        </div>
        <div style={{ flex: 2 }}>
          {selectedJob ? <JobDetail job={selectedJob} /> : <p>Please select a job</p>}
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
