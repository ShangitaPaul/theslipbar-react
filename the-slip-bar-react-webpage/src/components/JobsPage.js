import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobList from './JobList';
import JobDetail from './JobDetail';
import '../styles/JobsPage.css';

function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [locationFilter, setLocationFilter] = useState('');
  // Store only the expanded job ID, not the entire job object
  const [expandedJobId, setExpandedJobId] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/jobs`);
        setJobs(response.data);
        setFilteredJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  // ... other code remains the same ...

  const toggleJobDetails = (jobId) => {
    setExpandedJobId(jobId);
  };

  return (
    // ... other code remains the same ...
    {expandedJobId && (
      <div className="details-button-container">
        <button className="details-button" onClick={() => setExpandedJobId(null)}>
          Close Details
        </button>
      </div>
    )}
    {expandedJobId && (
      <JobDetail job={jobs.find((job) => job.id === expandedJobId)} />
    )}
  );
}

export default JobsPage;
