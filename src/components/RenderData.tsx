import { Container } from "@mui/material";
import React from "react";
import { JobPost, RenderDataProps } from "../utils/data";
import JobCard from "./JobCard";
import NoData from "./NoData";

const RenderData = ({ data }: RenderDataProps) => {
  return (
    <div>
      {data.length > 0 ? (
        data.map((job) => <JobCard key={job.id} job={job} />)
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default RenderData;
