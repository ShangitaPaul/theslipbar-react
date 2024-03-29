// JobList.js
import React from 'react';
import JobListItem from './JobListItem';

const JobList = ({ jobs, expandedJob, toggleJobDetails }) => {
  return (
    <div className="jobs-container">
      {jobs.map(job => (
        <JobListItem key={job.id} job={job} expanded={expandedJob === job.id} toggleDetails={toggleJobDetails} />
      ))}
    </div>
  );
};

export default JobList;
