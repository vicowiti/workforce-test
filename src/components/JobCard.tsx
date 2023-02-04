import { Typography } from "@mui/material";
import React from "react";
import { JobCardProps } from "../utils/data";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CircleIcon from "@mui/icons-material/Circle";

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div>
      <Typography display="flex" alignItems="center" component="h3">
        {" "}
        <WorkIcon sx={{ color: "primary" }} /> {job.title}
      </Typography>
      <Typography display="flex" alignItems="center">
        <LocationOnIcon /> {job.location}
      </Typography>
      <p>{job.description}</p>
      <ul>
        {job.requirements.map((item) => (
          <Typography
            display="flex"
            alignItems="center"
            component="li"
            key={item}
          >
            {item}
          </Typography>
        ))}
      </ul>
    </div>
  );
};

export default JobCard;
