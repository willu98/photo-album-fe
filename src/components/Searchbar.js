import SearchIcon from "@mui/icons-material/Search";
import { Button, FormControl, TextField } from "@mui/material";

const SearchBar = ({ setSearchQuery }) => (
  <FormControl
    sx={{ display: "flex", flexDirection: "row", alignSelf: "center" }}
  >
    <TextField
      id="search-bar"
      className="text"
      variant="filled"
      color="secondary"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="Find your Picture"
      placeholder="Search..."
      size="small"
      InputProps={{ disableUnderline: true }}
      sx={{
        backgroundColor: "#808080",
        "& .Mui-focused": {
          color: "#FFFFFF",
          mr: 0,
          padding: 0,
        },
      }}
    />
    <Button
      variant="filled"
      type="submit"
      aria-label="search"
      sx={{
        backgroundColor: "white",
        borderRadius: "0",
        "&:hover": { backgroundColor: "#ffffffa5" },
      }}
    >
      <SearchIcon style={{ fill: "blue" }} />
    </Button>
  </FormControl>
);

export default SearchBar;
