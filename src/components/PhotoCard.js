import { Card, CardMedia, Typography } from "@mui/material";

export const PhotoCard = (props) => {
  return (
    <Card
      sx={{
        height: "200px",
        width: "250px",
        flexDirection: "column",
        display: "flex",
      }}
    >
      <CardMedia
        component={"img"}
        image={props.img}
        alt={props.alt}
        sx={{
          display: "flex",
          height: "100%",
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
    </Card>
  );
};
