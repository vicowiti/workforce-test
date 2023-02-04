import { useEffect, useState } from "react";
import RenderData from "./components/RenderData";
import SearchBar from "./components/SearchBar";
import { JobPost } from "./utils/data";
import mydata from "./assets/job-data.json";
import NavBar from "./components/NavBar";
import { Grid } from "@mui/material";

const App = () => {
  const [jsonData] = useState<JobPost[]>(mydata);
  const [filteredData, setFilteredData] = useState<JobPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  //Handle Data Filtering
  useEffect(() => {
    setFilteredData(
      jsonData.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, jsonData]);
  return (
    <div>
      <NavBar />
      <Grid container spacing={{ lg: 3, xs: 1 }}>
        <Grid item xs={12} lg={8} order={{ xs: 2, lg: 1 }}>
          <RenderData data={filteredData} />
        </Grid>
        <Grid item xs={12} lg={4} order={{ xs: 1, lg: 1 }}>
          <SearchBar value={searchTerm} setSearch={setSearchTerm} />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
