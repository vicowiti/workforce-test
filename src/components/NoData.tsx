import { Stack, Typography } from "@mui/material";
import Search from "../assets/search.gif";

const NoData = () => {
  return (
    <Stack p={2}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={Search} alt="No data animation" width="300" />
      </div>
      <Typography
        fontSize="1.5rem"
        fontWeight="600"
        textAlign="center"
        color="secondary"
      >
        No Results, Refine Search
      </Typography>
    </Stack>
  );
};

export default NoData;
