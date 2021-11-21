import * as React from "react";

import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

const SearchBar = ({ handleClick, onChangeInput }) => {
  const handleKeyPress = (event) => {
    event.key === "Enter" && handleClick();
  };
  return (
    <FormControl>
      <Input
        onChange={onChangeInput}
        onKeyPress={handleKeyPress}
        placeholder="Search..."
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="start">
            <Button onClick={handleClick} variant="primary">
              Search
            </Button>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default SearchBar;
