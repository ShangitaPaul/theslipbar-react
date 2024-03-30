import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobList from './JobList';
import JobDetail from './JobDetail';
import '../styles/JobsPage.css';

function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [locationFilter, setLocationFilter] = useState('');
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

  const toggleJobDetails = (jobId) => {
    setExpandedJobId((prevJobId) => (prevJobId === jobId ? null : jobId));
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
      <JobList jobs={filteredJobs} expandedJobId={expandedJobId} toggleJobDetails={toggleJobDetails} />
      {expandedJobId && (
        <div className="details-button-container">
          <button className="details-button" onClick={() => setExpandedJobId(null)}>
            Close Details
          </button>
          <JobDetail job={jobs.find((job) => job.id === expandedJobId)} />
        </div>
      )}
    </div>
  );
}

export default JobsPage;
