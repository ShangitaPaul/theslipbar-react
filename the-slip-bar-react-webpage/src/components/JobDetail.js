import React from 'react';

const JobDetail = ({ job, expanded, onToggle, showInstructions, onToggleInstructions }) => {
  return (
    <div className="job-detail">
      <h2>Job Details</h2>
      <h3>{job.title}</h3>
      <button className="toggle-button" onClick={onToggle}>
        {expanded ? "Hide Details" : "Details"}
      </button>
      {expanded && (
        <div>
          <p>{job.description}</p>
          <p>Location: {job.location}</p>
        </div>
      )}
      <button className="toggle-button" onClick={onToggleInstructions}>
        {showInstructions ? "Hide Instructions" : "Apply"}
      </button>
      {showInstructions && (
        <div className="instructions">
          <p>Please email your resume to <a href={`mailto:${job.email}?subject=Applying for job ID ${job.id}`}>{job.email}</a> with the job ID {job.id} as the subject</p>
        </div>
      )}
    </div>
  );
};

export default JobDetail;
