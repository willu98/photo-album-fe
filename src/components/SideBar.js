import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
const SideBar = (props) => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };
  return (
    <Box sx={{ width: "100%", backgroundColor: "#303030" }}>
      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label="Your Photos" />
        <Tab label="Your Albums" />
        <Tab label="Your Account" />
      </Tabs>
    </Box>
  );
};

export default SideBar;
