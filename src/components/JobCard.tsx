import React from "react";
import { JobCardProps } from "../utils/data";

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div>
      <h3>{job.title}</h3>
      <h4>{job.location}</h4>
      <p>{job.description}</p>
      <ul>
        {job.requirements.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobCard;
