import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobList from './JobList';
import JobDetail from './JobDetail';
import '../styles/JobsPage.css';

function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [locationFilter, setLocationFilter] = useState('');
  const [expandedJobId, setExpandedJobId] = useState(null); // Store only expanded job ID

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/jobs`);
        setJobs(response.data);
        setFilteredJobs(response.data); // Initially set filtered jobs to all jobs
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    if (locationFilter) {
      const filtered = jobs.filter((job) => job.location === locationFilter);
      setFilteredJobs(filtered);
    } else {
      setFilteredJobs(jobs); // Reset filtered jobs when filter is cleared
    }
  }, [locationFilter, jobs]);

  const toggleJobDetails = (jobId) => {
    setExpandedJobId(jobId); // Directly set the expanded job ID
  };

  return (
    <div className="jobs-page">
      <h2 className="page-title">Come Join Us!</h2>
      <div className="filter-section">
        <select
          id="locationFilter"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          <option value="">All Locations</option>
          <option value="Lomita">Lomita</option>
          <option value="Redondo Beach">Redondo Beach</option>
        </select>
      </div>
      <JobList
        jobs={filteredJobs}
        expandedJobId={expandedJobId} // Pass expanded job ID to JobList
        toggleJobDetails={toggleJobDetails}
      />
      {expandedJobId && (
        <div className="details-button-container">
          <button className="details-button" onClick={() => setExpandedJobId(null)}>
            Close Details
          </button>
          {/* Pass expanded job ID to JobDetail */}
          <JobDetail job={jobs.find((job) => job.id === expandedJobId)} />
        </div>
      )}
    </div>
  );
}

export default JobsPage;
