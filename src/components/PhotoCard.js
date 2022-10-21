import { Card, CardActionArea, CardMedia } from "@mui/material";

export const PhotoCard = (props) => {
    return(
        <Card>
            <CardActionArea>
                <CardMedia component={"img"} image={props.img} alt={props.alt}>

                </CardMedia>
            </CardActionArea>
        </Card>
    );
}

