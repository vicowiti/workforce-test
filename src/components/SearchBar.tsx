import SearchIcon from "@mui/icons-material/Search";
import {
  Autocomplete,
  Button,
  Card,
  Checkbox,
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
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { SearchBarProps } from "../utils/data";

const SearchBar = ({ value, setSearch }: SearchBarProps) => {
  return (
    <Card sx={{ m: 1, p: 1.5 }}>
      <Stack>
        <Container>
          <TextField
            fullWidth
            sx={{ mb: 2 }}
            id="outlined-basic"
            label="Start typing to search"
            variant="filled"
            type="search"
            value={value}
            focused
            onChange={(e) => setSearch(e.target.value)}
          />

          <Stack sx={{ display: { xs: "none", lg: "block" } }}>
            <FormControl>
              <FormControlLabel control={<Checkbox />} label="Remote" />
              <FormControlLabel control={<Checkbox />} label="On Site" />
              <FormControlLabel control={<Checkbox />} label="Hybrid" />
            </FormControl>

            <FormControl sx={{ my: 2 }}>
              <FormLabel id="demo-radio-buttons-group-label">
                <Typography fontWeight={600} color="primary" component="h6">
                  Sector
                </Typography>
              </FormLabel>
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
          <Button
            sx={{
              display: {
                xs: "none",
                lg: "block",
              },
            }}
            fullWidth
            variant="contained"
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
        </Container>
      </Stack>
    </Card>
  );
};

export default SearchBar;
