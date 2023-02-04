import { useEffect, useState } from "react";
import RenderData from "./components/RenderData";
import SearchBar from "./components/SearchBar";
import { JobPost } from "./utils/data";
import mydata from "./assets/job-data.json";
import NavBar from "./components/NavBar";
import { Grid, Stack } from "@mui/material";

const App = () => {
  const [jsonData, setJsonData] = useState<JobPost[]>(mydata);
  const [filteredData, setFilteredData] = useState<JobPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  console.log("jsondata", jsonData);

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
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <RenderData data={filteredData} />
        </Grid>
        <Grid item xs={4}>
          <SearchBar value={searchTerm} setSearch={setSearchTerm} />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
