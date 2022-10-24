import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { PhotoCard } from "../components/PhotoCard";
import { getPhotos } from "../util/HttpRequests";
import ImageUpload from "../util/ImageUpload";

const PhotosPage = () => {
  const [loadedPhotos, setLoadedPhotos] = useState();

  //setup backend to send filename as well
  //setup getter for img by filename
  //also do delete by filename instead of id
  //setup child->parent function
  //const getNewPhoto = ()

  useEffect(() => {
    const loadPhotos = async () => {
      const photos = await getPhotos();
      setLoadedPhotos(photos);
    };
    loadPhotos();
  }, []);

  return (
    <Grid container spacing={4} sx={{ mt: 1 }}>
      <Grid item xs={12} sm={6} md={2} align="center">
        <ImageUpload />
      </Grid>

      {loadedPhotos &&
        loadedPhotos.map((photo) => (
          <Grid item xs={12} sm={6} md={2} key={photo.file_url} align="center">
            <PhotoCard
              img={photo.file_url}
              alt={photo.file_url}
              fileName={photo.user_filename}
            />
          </Grid>
        ))}
    </Grid>
  );
};
export default PhotosPage;
