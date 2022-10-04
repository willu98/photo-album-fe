import CameraAltIcon from "@mui/icons-material/CameraAlt";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";

import SearchBar from "./Searchbar";

const Navbar = (props) => {
  const [profileMenu, setProfileMenu] = useState(false);
  const menuRef = useRef(null);

  return (
    <>
      <AppBar position="static">
        <Box
          sx={{
            margin: "0 1em",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <CameraAltIcon sx={{ alignSelf: "center", mr: 1 }} />
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                mr: 2,
                alignSelf: "center",
                fontFamily: "monospace",
                fontWeight: 600,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Album
            </Typography>
          </Box>

          <Box sx={{ flexDirection: "row", display: "flex" }}>
            <SearchBar />
            <IconButton onClick={() => setProfileMenu(true)} ref={menuRef}>
              <Avatar>{"S"}</Avatar>
            </IconButton>
          </Box>
          <Menu
            open={profileMenu}
            onClose={() => setProfileMenu(false)}
            anchorEl={menuRef.current}
          >
            <MenuItem onClick={() => alert("hey")}>
              Account Information
            </MenuItem>
            <MenuItem onClick={() => alert("hey")}>Logout</MenuItem>
          </Menu>
        </Box>
      </AppBar>
    </>
  );
};

export default Navbar;
