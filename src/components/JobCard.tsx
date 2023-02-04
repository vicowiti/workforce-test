import {
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { JobCardProps } from "../utils/data";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const JobCard = ({ job }: JobCardProps) => {
  return (
    <Card sx={{ m: 1, p: 1.5 }}>
      <Typography
        display="flex"
        gap={1}
        alignItems="center"
        component="h3"
        variant="h6"
        sx={{ fontWeight: "900" }}
      >
        {" "}
        <WorkIcon color="primary" /> {job.title}
      </Typography>
      <Typography
        component="h5"
        display="flex"
        gap={1}
        mb={1.5}
        alignItems="center"
        color="secondary"
        sx={{ fontWeight: "500" }}
      >
        <LocationOnIcon color="primary" /> {job.location}
      </Typography>
      <Typography component="p">{job.description}</Typography>
      <Typography
        component="h6"
        color="primary"
        mt={1}
        fontSize={18}
        fontWeight={600}
      >
        Requirements
      </Typography>
      <List>
        {job.requirements.map((item) => (
          <ListItem key={item}>
            <ListItemIcon>
              <ArrowRightIcon color="primary" />
            </ListItemIcon>
            <ListItemText key={item} primary={item} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default JobCard;
