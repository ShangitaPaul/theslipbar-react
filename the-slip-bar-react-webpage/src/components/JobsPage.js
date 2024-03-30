// Fixing the typo from expandedJobId to expandedJob
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobList from './JobList';
import JobDetail from './JobDetail';
import '../styles/JobsPage.css';

function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [locationFilter, setLocationFilter] = useState('');
  const [expandedJob, setExpandedJob] = useState(null); // Corrected variable name

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

  const toggleJobDetails = (jobId) => {
    setExpandedJob((prevJobId) => (prevJobId === jobId ? null : jobId)); // Corrected variable name
  };

  return (
    <div className="jobs-page">
      <h2 className="page-title">Come Join Us!</h2>
      <div className="filter-section">
        <select id="locationFilter" value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
          <option value="">All Locations</option>
          <option value="Lomita">Lomita</option>
          <option value="Redondo Beach">Redondo Beach</option>
        </select>
      </div>
      <JobList jobs={filteredJobs} expandedJob={expandedJob} toggleJobDetails={toggleJobDetails} />
      {expandedJob && (
        <div className="details-button-container">
          <button className="details-button" onClick={() => setExpandedJob(null)}>
            Close Details
          </button>
          <JobDetail job={jobs.find((job) => job.id === expandedJob)} />
        </div>
      )}
    </div>
  );
}

export default JobsPage;
