import React from "react";
import { JobPost, RenderDataProps } from "../utils/data";
import JobCard from "./JobCard";

const RenderData = ({ data }: RenderDataProps) => {
  return (
    <div>
      {data.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default RenderData;
