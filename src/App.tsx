import { useEffect, useState } from "react";
import RenderData from "./components/RenderData";
import SearchBar from "./components/SearchBar";
import { JobPost } from "./utils/data";
import mydata from "./assets/job-data.json";

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
      <SearchBar value={searchTerm} setSearch={setSearchTerm} />
      <RenderData data={filteredData} />
    </div>
  );
};

export default App;
