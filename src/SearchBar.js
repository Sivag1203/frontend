import React from "react";
import { TextField } from "@mui/material";

const SearchBar = ({ setSearchQuery }) => {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <TextField
      fullWidth
      margin="normal"
      variant="outlined"
      placeholder="Search videos..."
      onChange={handleSearch}
      InputProps={{
        style: {
          backgroundColor: "#14293a",
          color: "white",
          borderRadius: "25px",
        },
      }}
      InputLabelProps={{ style: { color: "white" } }}
    />
  );
};

export default SearchBar;
