import { Box, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SideBar = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  useEffect(() => {
    switch (location.pathname) {
      case "/photos":
        setTabIndex(0);
        break;
      case "/albums":
        setTabIndex(1);
        break;
      case "/account":
        setTabIndex(2);
        break;
      default:
        break;
    }
  }, [location.pathname]);

  return (
    <Box sx={{ width: "100%", backgroundColor: "#303030" }}>
      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab
          label="Your Photos"
          onClick={() => {
            navigate("/photos");
          }}
        />
        <Tab
          label="Your Albums"
          onClick={() => {
            navigate("/albums");
          }}
        />
        <Tab
          label="Your Account"
          onClick={() => {
            navigate("/account");
          }}
        />
      </Tabs>
    </Box>
  );
};

export default SideBar;
