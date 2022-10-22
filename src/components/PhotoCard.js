import { Box } from "@mui/system";

export const PhotoCard = (props) => {
  return (
    <Box>
      <img src={props.img} alt={props.alt} />
    </Box>
    /*
    <Card
      sx={{
        maxHeight: "200px",
        maxWidth: "200px",
        flexDirection: "column",
        display: "flex",
      }}
    >
      <Box sx={{ height: "100%" }}>
        <CardMedia component={"img"} image={props.img} alt={props.alt} />
      </Box>
      <CardContent
        sx={{
          display: "flex",
          maxHeight: "20%",
          width: "100%",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            width: "100%",
            textAlign: "center",
            fontFamily: "monospace",
            fontWeight: 600,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          {props.fileName}
        </Typography>
      </CardContent>
    </Card>*/
  );
};
