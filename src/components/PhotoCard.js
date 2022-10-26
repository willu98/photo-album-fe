import MenuIcon from "@mui/icons-material/Menu";
import {
  Card,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
export const PhotoCard = (props) => {
  const [photoMenu, setPhotoMenu] = useState(false);
  const menuRef = useRef(null);
  return (
    <>
      <Card
        sx={{
          height: "200px",
          width: "270px",
          position: "relative",
        }}
      >
        <Box sx={{ position: "absolute", top: "0px", right: "0px" }}>
          <IconButton onClick={() => setPhotoMenu(true)} ref={menuRef}>
            <MenuIcon />
          </IconButton>
          <Menu
            open={photoMenu}
            onClose={() => setPhotoMenu(false)}
            anchorEl={menuRef.current}
          >
            <MenuItem>Update Info</MenuItem>
            <MenuItem>Add to Album</MenuItem>
            <MenuItem>Delete Photo</MenuItem>
          </Menu>
        </Box>
        <Box
          sx={{
            flexDirection: "column",
            display: "flex",
            height: "100%",
            width: "100%",
          }}
        >
          <CardMedia
            component={"img"}
            image={props.img}
            alt={props.alt}
            sx={{
              display: "flex",
              height: "95%",
              minHeight: "0",
              objectFit: "contain",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontFamily: "monospace",
              fontWeight: 600,
              color: "inherit",
              textDecoration: "none",
              height: "80px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {props.fileName}
          </Typography>
        </Box>
      </Card>
    </>
  );
};
