import SearchIcon from "@mui/icons-material/Search";
import {
  Autocomplete,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { SearchBarProps } from "../utils/data";

const SearchBar = ({ value, setSearch }: SearchBarProps) => {
  return (
    <Stack>
      <Container>
        <Input
          value={value}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search for openings"
        />

        <Stack>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Location</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value="remote"
              label="Location"
              // onChange={handleChange}
            >
              <MenuItem value="Remote">Remote</MenuItem>
              <MenuItem value="hybrid">Hybrid</MenuItem>
              <MenuItem value="onsite">Onsite</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Sector</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="UX/UI"
                control={<Radio />}
                label="UX/UI"
              />
              <FormControlLabel
                value="Frontend Development"
                control={<Radio />}
                label="Frontend Development"
              />
              <FormControlLabel
                value="Backend Development"
                control={<Radio />}
                label="Backend Development"
              />
            </RadioGroup>
          </FormControl>
        </Stack>
        <Button variant="contained" startIcon={<SearchIcon />}>
          Search
        </Button>
      </Container>
    </Stack>
  );
};

export default SearchBar;
